def rank_papers(results):

    ranked = sorted(

        results,

        key=lambda paper: (

            paper.get("cited_by_count", 0),

            paper.get("relevance_score", 0),

            paper.get("publication_year", 0),

        ),

        reverse=True,

    )

    return ranked