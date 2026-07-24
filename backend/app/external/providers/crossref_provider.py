from .base_provider import BaseProvider


class CrossrefProvider(BaseProvider):

    name = "Crossref"

    async def search(
        self,
        query: str,
        limit: int = 10,
    ):

        return []