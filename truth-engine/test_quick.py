"""Quick inline test — writes output to result.txt to avoid terminal truncation."""
import asyncio, json, logging, sys

logging.basicConfig(level=logging.INFO, stream=sys.stderr)

ARTICLE = """Elon Musk announced on March 15, 2024 that Tesla would invest $10 billion in a new Gigafactory in Mexico. He stated that the facility would create 25,000 jobs. She praised the development, referring to Mexican President Claudia Sheinbaum, who said her government would provide $3 billion in tax incentives. The IEA released its report showing global EV sales surpassed 14 million units in 2023. They projected EVs would represent 20% of all car sales by 2025. He argued that government subsidies remain essential, noting the U.S. Inflation Reduction Act allocated $7,500 per vehicle in tax credits."""

async def main():
    from app.agents.extractor import extract_claims
    result = await extract_claims(ARTICLE)
    with open("result.txt", "w", encoding="utf-8") as f:
        f.write(json.dumps(result, indent=2, default=str, ensure_ascii=False))
    print("Done. Check result.txt")

asyncio.run(main())
