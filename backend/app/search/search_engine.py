from app.external.openalex import search_papers


async def search(query: str):

    papers = await search_papers(query)

    return papers