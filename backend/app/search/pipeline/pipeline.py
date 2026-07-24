from app.search.pipeline.aggregator import aggregate
from app.search.pipeline.deduplicator import deduplicate


async def run_pipeline(
    query: str,
    limit: int = 10,
):

    papers = await aggregate(query, limit)

    papers = deduplicate(papers)

    return papers