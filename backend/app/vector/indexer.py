from app.vector.vector_index import index_document


def index_papers(papers):

    for paper in papers:

        try:

            index_document(paper)

        except Exception as e:

            print(f"Index error: {e}")