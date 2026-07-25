from app.embeddings.embedding_service import embedding_service
from app.vector.vector_search import search_vectors


def semantic_search(query: str, top_k: int = 20):

    vector = embedding_service.embed_text(query)

    papers = search_vectors(
        vector,
        top_k,
    )

    return papers