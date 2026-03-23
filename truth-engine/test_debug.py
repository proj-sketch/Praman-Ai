"""Direct test of extractor — prints raw Gemini response to diagnose parsing issues."""
import asyncio, json, logging, sys, re
import google.generativeai as genai
from app.config import GEMINI_API_KEY, GEMINI_MODEL
from app.utils.prompts import EXTRACTOR_SYSTEM_PROMPT, EXTRACTOR_USER_PROMPT

logging.basicConfig(level=logging.DEBUG, stream=sys.stdout)

TEXT = "Elon Musk announced on March 15, 2024 that Tesla would invest $10 billion in a new Gigafactory in Mexico. He stated that the facility would create 25,000 jobs."

async def main():
    genai.configure(api_key=GEMINI_API_KEY)
    print(f"Model: {GEMINI_MODEL}")
    print(f"API key: {GEMINI_API_KEY[:10]}...")
    
    model = genai.GenerativeModel(
        model_name=GEMINI_MODEL,
        system_instruction=EXTRACTOR_SYSTEM_PROMPT,
        generation_config=genai.GenerationConfig(
            temperature=0.2,
            top_p=0.8,
            max_output_tokens=4096,
            response_mime_type="application/json",
        ),
    )
    
    prompt = EXTRACTOR_USER_PROMPT.format(input_text=TEXT)
    print(f"\nPrompt length: {len(prompt)} chars")
    print("Calling Gemini...")
    
    try:
        response = model.generate_content(prompt)
        raw = response.text.strip()
        print(f"\nRaw response length: {len(raw)}")
        print(f"Raw response (first 500): {raw[:500]}")
        
        # Try parsing
        result = json.loads(raw)
        print(f"\n✅ JSON parsed successfully!")
        print(f"Claims: {len(result.get('claims', []))}")
        with open("debug_result.txt", "w", encoding="utf-8") as f:
            f.write(json.dumps(result, indent=2, ensure_ascii=False))
        print("Written to debug_result.txt")
    except Exception as e:
        print(f"\n❌ Error: {e}")

asyncio.run(main())
