from app.vector.faiss_store import faiss_store

from app.embeddings.embedding_service import embedding_service


def index_document(document):

    embedding = embedding_service.embed_text(

        document["title"]

    )

    faiss_store.add(

        embedding,

        document,

    )