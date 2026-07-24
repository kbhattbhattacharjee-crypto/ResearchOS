from .base_provider import BaseProvider


class SemanticScholarProvider(BaseProvider):

    name = "Semantic Scholar"

    async def search(
        self,
        query: str,
        limit: int = 10,
    ):

        return []