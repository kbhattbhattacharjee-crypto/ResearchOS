class VectorStore:

    def __init__(self):

        self.documents = []

        self.embeddings = []

    def add(

        self,

        document,

        embedding,

    ):

        self.documents.append(document)

        self.embeddings.append(embedding)

    def size(self):

        return len(self.documents)


vector_store = VectorStore()