QUERY_MAP = {

    "llm": [
        "large language model",
        "gpt",
        "bert",
        "transformer",
        "foundation model",
    ],

    "nlp": [
        "natural language processing",
        "language model",
        "bert",
        "transformer",
    ],

    "cv": [
        "computer vision",
        "vision transformer",
        "cnn",
        "image recognition",
    ],

    "ai": [
        "artificial intelligence",
        "machine learning",
        "deep learning",
    ],

    "ml": [
        "machine learning",
        "supervised learning",
        "unsupervised learning",
    ],

}


def expand_query(query: str):

    expanded = [query]

    key = query.lower().strip()

    if key in QUERY_MAP:

        expanded.extend(QUERY_MAP[key])

    return expanded