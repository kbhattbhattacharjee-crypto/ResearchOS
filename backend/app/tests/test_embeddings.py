from app.embeddings.embedding_service import embedding_service


def test_embedding():

    vector = embedding_service.embed_text(
        "Artificial Intelligence"
    )

    print()

    print("Embedding dimension:", len(vector))

    print()

    print("First five values:")

    print(vector[:5])

    print()

    print("Embedding generated successfully.")


if __name__ == "__main__":
    test_embedding()