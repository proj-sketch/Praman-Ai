import httpx
import asyncio

async def main():
    async with httpx.AsyncClient(timeout=100) as client:
        url = "http://localhost:8000/verify"
        payload = {"text": "Elon Musk announced on March 15, 2024 that Tesla would invest $10 billion in a new Gigafactory in Mexico. He stated that the facility would create 25,000 jobs."}
        try:
            async with client.stream("POST", url, json=payload) as r:
                async for chunk in r.aiter_text():
                    print(chunk, end="")
        except Exception as e:
            print("Error:", e)

if __name__ == "__main__":
    asyncio.run(main())
