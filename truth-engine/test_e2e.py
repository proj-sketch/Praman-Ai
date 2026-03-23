"""Full end-to-end test of all 3 agents via the /verify API. Writes output to e2e_result.txt."""
import httpx, asyncio, json

ARTICLE = """Elon Musk announced on March 15, 2024 that Tesla would invest $10 billion in a new Gigafactory in Mexico. He stated that the facility would create 25,000 jobs. She praised the development, referring to Mexican President Claudia Sheinbaum, who said her government would provide $3 billion in tax incentives. The IEA released its report showing global EV sales surpassed 14 million units in 2023. They projected EVs would represent 20% of all car sales by 2025. He argued that government subsidies remain essential, noting the U.S. Inflation Reduction Act allocated $7,500 per vehicle in tax credits."""

async def main():
    events = []
    async with httpx.AsyncClient(timeout=600) as client:
        async with client.stream("POST", "http://localhost:8000/verify", json={"text": ARTICLE}) as r:
            buffer = ""
            async for chunk in r.aiter_text():
                buffer += chunk
                lines = buffer.split("\n")
                buffer = lines.pop()
                event_type = ""
                for line in lines:
                    if line.startswith("event: "):
                        event_type = line[7:].strip()
                    elif line.startswith("data: "):
                        try:
                            data = json.loads(line[6:].strip())
                            events.append({"event": event_type, "data": data})
                            step = data.get("step", "")
                            status = data.get("status", "")
                            if event_type == "pipeline_step":
                                detail = data.get("detail", {})
                                if step == "extract" and status == "completed":
                                    print(f"✅ EXTRACT: {detail.get('claims_count', 0)} claims found")
                                elif step == "research" and status == "completed":
                                    print(f"✅ RESEARCH: {detail.get('claims_researched', 0)} claims researched")
                                elif step == "verdict" and status == "completed":
                                    print(f"✅ VERDICT: {detail.get('verdicts_count', 0)} verdicts, credibility={detail.get('overall_credibility', '?')}")
                                elif status == "started":
                                    print(f"⏳ {step.upper()} started...")
                            elif event_type == "complete":
                                print(f"\n🎉 PIPELINE COMPLETE")
                            elif event_type == "error":
                                print(f"❌ ERROR: {data.get('message', '?')}")
                        except json.JSONDecodeError:
                            pass
                        event_type = ""

    # Find the complete event
    complete_data = next((e["data"] for e in events if e["event"] == "complete"), None)
    if complete_data:
        with open("e2e_result.txt", "w", encoding="utf-8") as f:
            f.write(json.dumps(complete_data, indent=2, default=str, ensure_ascii=False))
        print(f"\n📝 Full report saved to e2e_result.txt")
        print(f"   Claims: {complete_data.get('total_claims', '?')}")
        print(f"   Verdicts: {len(complete_data.get('verdicts', []))}")
        oa = complete_data.get("overall_assessment", {})
        print(f"   True={oa.get('true_count',0)} False={oa.get('false_count',0)} Partial={oa.get('partial_count',0)} Unverifiable={oa.get('unverifiable_count',0)}")
        print(f"   Credibility: {oa.get('overall_credibility', '?')}")
        errors = complete_data.get("errors", [])
        if errors:
            print(f"   ⚠️ Errors: {errors}")
    else:
        print("❌ No complete event received!")
        with open("e2e_result.txt", "w", encoding="utf-8") as f:
            f.write(json.dumps(events, indent=2, default=str, ensure_ascii=False))

asyncio.run(main())
