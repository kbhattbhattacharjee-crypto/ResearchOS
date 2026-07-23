from fastapi import APIRouter

from app.search.search_engine import search

router = APIRouter(
    prefix="/search",
    tags=["Research Search"],
)


@router.get("/")
async def search_research_papers(query: str):

    return await search(query)