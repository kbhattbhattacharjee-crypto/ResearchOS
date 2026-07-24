from app.search.pipeline.pipeline import run_pipeline

from app.search.paper_ranker import rank_papers


async def search(query: str):

    papers = await run_pipeline(query)

    ranked = rank_papers(papers)

    return {

        "query": query,

        "count": len(ranked),

        "results": ranked,

    }