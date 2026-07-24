import numpy as np

from app.vector.faiss_store import faiss_store

from app.embeddings.embedding_service import embedding_service


def semantic_search(

    query,

    k=5,

):

    if faiss_store.size() == 0:

        return []

    query_vector = np.array(

        [

            embedding_service.embed_text(

                query

            )

        ],

        dtype="float32",

    )

    scores, indices = faiss_store.index.search(

        query_vector,

        k,

    )

    results = []

    for index in indices[0]:

        if index == -1:

            continue

        results.append(

            faiss_store.documents[index]

        )

    return results