from app.embeddings.embedding_model import encode


class EmbeddingService:

    def embed_text(
        self,
        text: str,
    ):

        return encode(text)

    def embed_documents(
        self,
        documents: list[str],
    ):

        return [
            encode(doc)
            for doc in documents
        ]


embedding_service = EmbeddingService()