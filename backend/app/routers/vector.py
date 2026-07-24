from fastapi import APIRouter

from app.vector.faiss_store import faiss_store

router = APIRouter(
    prefix="/vector",
    tags=["Vector DB"],
)


@router.get("/stats")
def stats():

    return {

        "indexed_papers": faiss_store.size()

    }