from .base_provider import BaseProvider


class ArxivProvider(BaseProvider):

    name = "arXiv"

    async def search(
        self,
        query: str,
        limit: int = 10,
    ):

        return []