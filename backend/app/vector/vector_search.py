import numpy as np

from app.vector.faiss_store import faiss_store


def search_vectors(vector, top_k=20):

    if faiss_store.size() == 0:

        return []

    vector = np.array(
        [vector],
        dtype="float32",
    )

    scores, indices = faiss_store.index.search(
        vector,
        min(top_k, faiss_store.size()),
    )

    results = []

    for idx in indices[0]:

        if idx == -1:

            continue

        results.append(

            faiss_store.documents[idx]

        )

    return results