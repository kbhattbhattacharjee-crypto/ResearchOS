from app.embeddings.embedding_service import embedding_service

from app.embeddings.vector_store import vector_store


def add_document(document):

    embedding = embedding_service.embed_text(

        document

    )

    vector_store.add(

        document,

        embedding,

    )