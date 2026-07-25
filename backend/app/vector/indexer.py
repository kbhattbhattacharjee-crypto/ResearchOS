from app.vector.vector_index import index_document
from app.vector.faiss_store import faiss_store


def index_papers(papers):

    faiss_store.reset()

    for paper in papers:

        try:
            index_document(paper)

        except Exception as e:
            print(f"Index error: {e}")