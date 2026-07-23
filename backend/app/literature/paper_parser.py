def parse_paper(paper):

    primary_location = paper.get("primary_location") or {}

    source = primary_location.get("source") or {}

    return {
        "id": paper.get("id"),

        "title": paper.get("display_name"),

        "year": paper.get("publication_year"),

        "citations": paper.get("cited_by_count", 0),

        "doi": paper.get("doi"),

        "open_access": (
            paper.get("open_access") or {}
        ).get(
            "is_oa",
            False,
        ),

        "venue": source.get(
            "display_name",
            "Unknown",
        ),

        "authors": [
            author.get("author", {}).get("display_name", "")
            for author in paper.get("authorships", [])
        ],

        "relevance_score": paper.get(
            "relevance_score",
            0,
        ),
    }