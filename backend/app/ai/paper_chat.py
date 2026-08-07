from app.vector.vector_search import search_vectors
from app.embeddings.embedding_service import embedding_service


def ask_papers(question):

    vector = embedding_service.embed_text(
        question
    )

    results = search_vectors(
        vector,
        top_k=5
    )

    context = []

    for paper in results:

        context.append(

            paper.get(
                "title",
                ""
            )

        )

    return {

        "question": question,

        "sources": context,

    }