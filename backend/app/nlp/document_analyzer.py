import re


def analyze_document(text: str):

    words = text.split()

    word_count = len(words)

    character_count = len(text)

    reading_time = max(
        1,
        round(word_count / 200)
    )

    paragraphs = [

        p.strip()

        for p in text.split("\n")

        if len(p.strip()) > 40

    ]

    summary = ""

    if paragraphs:

        summary = paragraphs[0][:500]

    stop_words = {

        "the","and","of","to","in","for","a","an",
        "on","is","are","with","that","this",
        "from","by","as","or","be","at","it",
        "we","our","their","its","using"

    }

    cleaned = re.findall(

        r"[A-Za-z]{4,}",

        text.lower()

    )

    frequency = {}

    for word in cleaned:

        if word in stop_words:

            continue

        frequency[word] = frequency.get(word, 0) + 1

    keywords = sorted(

        frequency,

        key=frequency.get,

        reverse=True

    )[:10]

    return {

        "summary": summary,

        "keywords": keywords,

        "word_count": word_count,

        "character_count": character_count,

        "reading_time": reading_time,

    }