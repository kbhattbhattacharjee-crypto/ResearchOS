def deduplicate(papers):

    seen = set()

    unique = []

    for paper in papers:

        doi = (paper.get("doi") or "").lower().strip()

        title = (paper.get("title") or "").lower().strip()

        key = doi if doi else title

        if not key:
            continue

        if key in seen:
            continue

        seen.add(key)

        unique.append(paper)

    return unique