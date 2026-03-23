import httpx, asyncio

async def main():
    async with httpx.AsyncClient(timeout=60) as client:
        print("Connecting to /verify...")
        async with client.stream("POST", "http://localhost:8000/verify", json={"text": "Elon Musk announced on March 15, 2024 that Tesla would invest $10 billion in a new Gigafactory in Mexico. He stated that the facility would create 25,000 jobs."}) as r:
            count = 0
            async for chunk in r.aiter_text():
                count += 1
                print(f"--- Chunk {count} ---")
                print(repr(chunk))
                if count > 10: break

asyncio.run(main())
