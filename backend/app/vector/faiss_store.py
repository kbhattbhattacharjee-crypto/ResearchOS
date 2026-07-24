import faiss
import numpy as np

EMBEDDING_DIM = 384


class FaissStore:

    def __init__(self):

        self.index = faiss.IndexFlatIP(
            EMBEDDING_DIM
        )

        self.documents = []

        self.ids = set()

    def add(
        self,
        embedding,
        metadata,
    ):

        paper_id = metadata.get("id")

        if paper_id in self.ids:

            return

        self.ids.add(paper_id)

        vector = np.array(

            [embedding],

            dtype="float32",

        )

        self.index.add(vector)

        self.documents.append(metadata)

    def size(self):

        return self.index.ntotal


faiss_store = FaissStore()