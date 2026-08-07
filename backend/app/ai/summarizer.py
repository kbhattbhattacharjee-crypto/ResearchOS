from collections import Counter
import re


def summarize_text(text: str, max_sentences: int = 5):

    if not text:
        return ""

    sentences = re.split(
        r'(?<=[.!?])\s+',
        text
    )

    if len(sentences) <= max_sentences:
        return text[:2000]

    words = re.findall(
        r"\w+",
        text.lower()
    )

    frequencies = Counter(words)

    scores = {}

    for sentence in sentences:

        sentence_words = re.findall(
            r"\w+",
            sentence.lower()
        )

        scores[sentence] = sum(
            frequencies[word]
            for word in sentence_words
        )

    ranked = sorted(
        scores,
        key=scores.get,
        reverse=True
    )

    summary = ranked[:max_sentences]

    return " ".join(summary)