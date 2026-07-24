QUERY_EXPANSIONS = {

    "llm": [
        "large language model",
        "transformer",
        "foundation model",
        "generative ai",
    ],

    "nlp": [
        "natural language processing",
        "bert",
        "transformer",
        "language model",
    ],

    "rag": [
        "retrieval augmented generation",
        "vector database",
        "embedding",
    ],

    "cnn": [
        "convolutional neural network",
        "deep learning",
        "computer vision",
    ],

    "gan": [
        "generative adversarial network",
        "image generation",
    ],

    "rl": [
        "reinforcement learning",
        "deep reinforcement learning",
    ],

    "cv": [
        "computer vision",
        "image processing",
    ],

}


def expand_query(query: str):

    expanded = [query]

    key = query.lower().strip()

    if key in QUERY_EXPANSIONS:

        expanded.extend(

            QUERY_EXPANSIONS[key]

        )

    return expanded