from app.vector.vector_index import index_document

from app.vector.vector_search import semantic_search


papers = [

    {

        "title": "Transformer Models"

    },

    {

        "title": "Deep Learning"

    },

    {

        "title": "Natural Language Processing"

    },

]


for paper in papers:

    index_document(paper)


results = semantic_search(

    "transformer"

)

print()

print(results)