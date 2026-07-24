from app.external.openalex import search_papers
from app.literature.paper_parser import parse_paper

from .base_provider import BaseProvider


class OpenAlexProvider(BaseProvider):

    name = "OpenAlex"

    async def search(
        self,
        query: str,
        limit: int = 10,
    ):

        response = await search_papers(query, limit)

        return [

            parse_paper(paper)

            for paper in response["results"]

        ]