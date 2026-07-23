import httpx

BASE_URL = "https://api.openalex.org/works"


async def search_papers(query: str, limit: int = 10):

    params = {
        "search": query,
        "per-page": limit,
    }

    async with httpx.AsyncClient(timeout=30) as client:

        response = await client.get(
            BASE_URL,
            params=params,
        )

        response.raise_for_status()

        return response.json()