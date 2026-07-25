from app.search.scoring import (
    citation_score,
    freshness_score,
    relevance_score,
)


def hybrid_score(paper):

    score = 0

    score += relevance_score(paper) * 0.60

    score += citation_score(paper) * 0.0005

    score += freshness_score(paper) * 0.10

    if paper.get("open_access"):
        score += 8

    if paper.get("authors_count", 0) >= 3:
        score += 2

    if paper.get("venue") != "Unknown":
        score += 3

    return score


def hybrid_rank(papers):

    return sorted(

        papers,

        key=hybrid_score,

        reverse=True,

    )