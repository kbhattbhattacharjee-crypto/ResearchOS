from fastapi import APIRouter

router = APIRouter()

notes = [
    {
        "id": 1,
        "title": "FastAPI",
        "content": "Learn routing"
    }
]


@router.get("/notes")
def get_notes():
    return notes