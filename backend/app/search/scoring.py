def citation_score(paper):

    return paper.get(

        "cited_by_count",

        0,

    )


def freshness_score(paper):

    return paper.get(

        "publication_year",

        0,

    )


def relevance_score(paper):

    return paper.get(

        "relevance_score",

        0,

    )