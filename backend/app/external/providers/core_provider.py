from .base_provider import BaseProvider


class CoreProvider(BaseProvider):

    name = "CORE"

    async def search(
        self,
        query: str,
        limit: int = 10,
    ):

        return []