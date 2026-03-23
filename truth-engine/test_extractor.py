"""Test the improved extraction agent with CoT reasoning and context injection."""
import asyncio
import json
import logging

logging.basicConfig(level=logging.INFO)

# A ~500-word article with many pronouns to test context injection
TEST_ARTICLE = """
Elon Musk announced on March 15, 2024 that Tesla would invest $10 billion in a new
Gigafactory in Mexico. He stated that the facility would create approximately 25,000
jobs and produce 2 million vehicles annually by 2028. The CEO also mentioned that
Tesla's market share in the U.S. electric vehicle market had reached 55% in Q4 2023.

She praised the development, referring to Mexican President Claudia Sheinbaum, who
said her government would provide $3 billion in tax incentives over 10 years. The
president added that Mexico's GDP growth had reached 3.2% in 2023, partly driven by
automotive manufacturing, which accounts for 18% of the country's exports.

Meanwhile, the International Energy Agency (IEA) released its annual report showing
that global EV sales surpassed 14 million units in 2023, a 35% increase from 2022.
They projected that EVs would represent 20% of all car sales worldwide by 2025. The
organization's director, Fatih Birol, said the transition to electric vehicles could
reduce global CO2 emissions by 1.5 gigatons per year by 2030.

He argued that government subsidies remain essential, noting that the U.S. Inflation
Reduction Act had allocated $7,500 per vehicle in consumer tax credits. The policy
had reportedly boosted EV adoption in the United States by 42% year-over-year. His
remarks came during a press conference in Paris on January 20, 2024.

Critics suggest that EV adoption still faces challenges due to charging infrastructure
gaps. According to the Department of Energy, the U.S. currently has approximately
168,000 public charging ports, far below the 500,000 target set for 2030. Some experts
believe the timeline is unrealistic, which is a matter of opinion rather than fact.
"""

async def main():
    from app.agents.extractor import extract_claims
    
    print("=" * 70)
    print("TEST: Extraction Agent — CoT Reasoning + Context Injection")
    print("=" * 70)
    
    result = await extract_claims(TEST_ARTICLE)
    
    print(f"\n📊 Total claims found: {result.get('total_claims_found', 0)}")
    print(f"📝 Summary: {result.get('summary', 'N/A')}")
    
    if result.get("error"):
        print(f"\n❌ Error: {result['error']}")
        return
    
    claims = result.get("claims", [])
    print(f"\n{'=' * 70}")
    print(f"CLAIMS ({len(claims)} total)")
    print(f"{'=' * 70}")
    
    all_pass = True
    for claim in claims:
        print(f"\n--- Claim #{claim.get('id', '?')} ---")
        print(f"  Original:   {claim.get('original_text', '⚠️ MISSING')}")
        print(f"  Resolved:   {claim.get('claim_text', '⚠️ MISSING')}")
        print(f"  Category:   {claim.get('category', '?')}")
        print(f"  Importance: {claim.get('importance', '?')}/5")
        print(f"  Context:    {claim.get('context', '?')}")
        print(f"  Reasoning:  {claim.get('reasoning', '⚠️ MISSING')}")
        
        # Validation checks
        has_reasoning = claim.get("reasoning") and claim["reasoning"] != "No reasoning provided."
        has_original = claim.get("original_text") and claim["original_text"] != ""
        no_pronouns = not any(p in claim.get("claim_text", "").split() 
                             for p in ["He", "She", "They", "It", "His", "Her", "Their"])
        
        if not has_reasoning:
            print(f"  ⚠️  FAIL: Missing CoT reasoning")
            all_pass = False
        if not has_original:
            print(f"  ⚠️  FAIL: Missing original_text")
            all_pass = False
        if not no_pronouns:
            print(f"  ⚠️  WARN: claim_text may contain unresolved pronouns")
    
    print(f"\n{'=' * 70}")
    if all_pass:
        print("✅ ALL CHECKS PASSED — CoT reasoning and context injection working!")
    else:
        print("⚠️  Some checks had warnings — review claims above.")
    print(f"{'=' * 70}")

asyncio.run(main())
