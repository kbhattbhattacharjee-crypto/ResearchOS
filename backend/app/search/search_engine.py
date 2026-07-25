from app.external.openalex import search_papers

from app.search.paper_ranker import rank_papers
from app.search.hybrid_ranker import hybrid_rank
from app.search.semantic_search import semantic_search

from app.literature.paper_parser import parse_paper

from app.vector.indexer import index_papers

from app.analytics.search_logger import log_search


async def search(query: str):

    response = await search_papers(query)

    ranked = rank_papers(
        response["results"]
    )

    parsed = [

        parse_paper(paper)

        for paper in ranked

    ]

    parsed = hybrid_rank(parsed)

    index_papers(parsed)

    semantic_results = semantic_search(query)
    
    log_search(
    
        query,
    
        len(parsed),
    
    )

    return {

        "query": query,

        "count": len(parsed),

        "results": parsed,

        "semantic_results": semantic_results,

    }