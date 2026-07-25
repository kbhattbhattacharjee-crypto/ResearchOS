import json
from pathlib import Path
from datetime import datetime

# backend/data/search_history.json
DATA_DIR = Path(__file__).resolve().parents[2] / "data"
DATA_DIR.mkdir(parents=True, exist_ok=True)

FILE = DATA_DIR / "search_history.json"


def log_search(query: str, result_count: int):

    record = {
        "query": query,
        "results": result_count,
        "time": datetime.now().isoformat(),
    }

    if not FILE.exists():
        FILE.write_text("[]")

    with open(FILE, "r") as f:
        history = json.load(f)

    history.append(record)

    with open(FILE, "w") as f:
        json.dump(history, f, indent=4)