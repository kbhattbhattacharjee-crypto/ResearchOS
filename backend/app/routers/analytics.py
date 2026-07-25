from fastapi import APIRouter

from app.analytics.search_stats import get_statistics

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"],
)


@router.get("/stats")
def analytics():

    return get_statistics()