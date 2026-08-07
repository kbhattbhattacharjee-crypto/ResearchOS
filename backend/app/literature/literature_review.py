def build_literature_review(documents):

    sections = []

    for doc in documents:

        title = doc.get(
            "title",
            "Unknown"
        )

        summary = doc.get(
            "summary",
            ""
        )

        sections.append(

            f"{title}\n{summary}"

        )

    return "\n\n".join(sections)
