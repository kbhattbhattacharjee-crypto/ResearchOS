from sentence_transformers import SentenceTransformer

MODEL_NAME = "sentence-transformers/all-MiniLM-L6-v2"

print("Loading embedding model...")

model = SentenceTransformer(MODEL_NAME)

print("Embedding model loaded.")


def encode(text: str):

    embedding = model.encode(
        text,
        normalize_embeddings=True,
    )

    return embedding.tolist()