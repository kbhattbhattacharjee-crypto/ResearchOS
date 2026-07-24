from abc import ABC, abstractmethod


class BaseProvider(ABC):

    name = "provider"

    @abstractmethod
    async def search(self, query: str, limit: int = 10):
        """
        Every provider must return
        a list of ResearchOS papers.
        """
        pass