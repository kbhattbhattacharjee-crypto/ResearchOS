import json
from pathlib import Path
from collections import Counter

DATA_FILE = (
    Path(__file__).resolve().parents[2]
    / "data"
    / "search_history.json"
)


def get_statistics():

    if not DATA_FILE.exists():

        return {
            "total_searches": 0,
            "unique_queries": 0,
            "average_results": 0,
            "top_queries": [],
            "recent_searches": [],
        }

    with open(DATA_FILE) as f:

        history = json.load(f)

    queries = [

        item["query"]

        for item in history

    ]

    top_queries = Counter(
        queries
    ).most_common(10)

    average_results = round(

        sum(

            item["results"]

            for item in history

        ) / len(history),

        2,

    )

    return {

        "total_searches": len(history),

        "unique_queries": len(set(queries)),

        "average_results": average_results,

        "top_queries": top_queries,

        "recent_searches": history[-10:],

    }