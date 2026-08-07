from fastapi import APIRouter

from app.vector.faiss_store import faiss_store
from app.ai.paper_chat import ask_papers

router = APIRouter(
    prefix="/vector",
    tags=["Vector DB"],
)


@router.get("/stats")
def stats():

    return {

        "indexed_papers":
        faiss_store.size()

    }


@router.get("/ask")
def ask(question: str):

    return ask_papers(question)