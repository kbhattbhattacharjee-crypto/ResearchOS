from app.vector.faiss_store import faiss_store
from app.embeddings.embedding_service import embedding_service


def build_text(document):

    parts = [

        document.get("title", ""),

        " ".join(document.get("concepts", [])),

        document.get("venue", ""),

        document.get("abstract", "")
        if isinstance(document.get("abstract"), str)
        else "",

    ]

    return "\n".join(parts)


def index_document(document):

    embedding = embedding_service.embed_text(

        build_text(document)

    )

    faiss_store.add(

        embedding,

        document,

    )