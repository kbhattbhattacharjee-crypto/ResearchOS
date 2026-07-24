from app.search.pipeline.aggregator import aggregate
from app.search.pipeline.deduplicator import deduplicate
from app.search.pipeline.query_expander import expand_query


async def run_pipeline(
    query: str,
    limit: int = 10,
):

    expanded_queries = expand_query(query)

    papers = []

    for q in expanded_queries:

        papers.extend(

            await aggregate(q, limit)

        )

    papers = deduplicate(papers)

    return papers