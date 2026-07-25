"""
Convert raw OpenAlex papers into a clean format
used by the frontend and later AI pipeline.
"""


def parse_paper(paper: dict) -> dict:
    """
    Parse one OpenAlex paper.
    """

    primary_location = paper.get("primary_location") or {}
    source = primary_location.get("source") or {}
    open_access = paper.get("open_access") or {}

    return {
        # -----------------------------
        # Basic Information
        # -----------------------------
        "id": paper.get("id"),
        "title": paper.get("display_name"),
        "year": paper.get("publication_year"),
        "type": paper.get("type"),
        "language": paper.get("language"),
    
        # -----------------------------
        # Ranking Information
        # -----------------------------
        "citations": paper.get("cited_by_count", 0),
        "relevance_score": paper.get("relevance_score", 0),
    
        # -----------------------------
        # Publication
        # -----------------------------
        "doi": paper.get("doi"),
    
        "venue": source.get(
            "display_name",
            "Unknown",
        ),
    
        "publisher": source.get(
            "host_organization_name"
        ),
    
        # -----------------------------
        # Open Access
        # -----------------------------
        "open_access": open_access.get(
            "is_oa",
            False,
        ),
    
        "oa_status": open_access.get(
            "oa_status"
        ),
    
        # -----------------------------
        # Authors
        # -----------------------------
        "authors": [
            author.get("author", {}).get(
                "display_name",
                ""
            )
            for author in paper.get(
                "authorships",
                []
            )
        ],
    
        "authors_count": len(
            paper.get(
                "authorships",
                []
            )
        ),
    
        # -----------------------------
        # Concepts
        # -----------------------------
        "concepts": [
            concept.get("display_name")
            for concept in paper.get(
                "concepts",
                []
            )[:8]
        ],
    
        "keyword_count": len(
            paper.get(
                "concepts",
                []
            )
        ),
    
        # -----------------------------
        # References
        # -----------------------------
        "referenced_works": len(
            paper.get(
                "referenced_works",
                []
            )
        ),
    
        # -----------------------------
        # Open Access Bonus
        # -----------------------------
        "oa_bonus": (
            1
            if open_access.get(
                "is_oa",
                False,
            )
            else 0
        ),
    
        # -----------------------------
        # Abstract
        # -----------------------------
        "abstract": paper.get(
            "abstract_inverted_index"
        ),
    }