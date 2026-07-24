import asyncio

from app.external.providers.openalex_provider import OpenAlexProvider
from app.external.providers.semantic_provider import SemanticScholarProvider
from app.external.providers.crossref_provider import CrossrefProvider
from app.external.providers.arxiv_provider import ArxivProvider
from app.external.providers.core_provider import CoreProvider


providers = [

    OpenAlexProvider(),

    SemanticScholarProvider(),

    CrossrefProvider(),

    ArxivProvider(),

    CoreProvider(),

]


async def aggregate(
    query: str,
    limit: int = 10,
):

    tasks = [

        provider.search(query, limit)

        for provider in providers

    ]

    results = await asyncio.gather(*tasks)

    merged = []

    for papers in results:

        merged.extend(papers)

    return merged