def detect_research_gaps(text: str):

    gaps = []

    keywords = [

        "future work",
        "limitation",
        "limitations",
        "challenge",
        "challenges",
        "open problem",
        "open problems",
        "further research",

    ]

    lower = text.lower()

    for keyword in keywords:

        if keyword in lower:

            gaps.append(keyword)

    return list(set(gaps))