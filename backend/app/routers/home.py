from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def home():
    return {
        "project": "ResearchOS",
        "status": "Running"
    }
    