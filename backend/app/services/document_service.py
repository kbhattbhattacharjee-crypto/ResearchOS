from sqlalchemy.orm import Session

from app.models.document import Document


def save_document(
    db: Session,
    filename: str,
    filepath: str,
    extracted_text: str,
    summary: str,
    keywords: str,
    reading_time: int,
    word_count: int,
    character_count: int,
):
    document = Document(
        filename=filename,
        filepath=filepath,
        extracted_text=extracted_text,
        summary=summary,
        keywords=keywords,
        reading_time=reading_time,
        word_count=word_count,
        character_count=character_count,
    )

    db.add(document)
    db.commit()
    db.refresh(document)

    return document


def get_all_documents(db: Session):
    return db.query(Document).all()


def search_documents(
    db: Session,
    query: str,
):
    return (
        db.query(Document)
        .filter(
            (Document.filename.ilike(f"%{query}%")) |
            (Document.extracted_text.ilike(f"%{query}%"))
        )
        .all()
    )


def delete_document(
    db: Session,
    document_id: int,
):
    document = (
        db.query(Document)
        .filter(Document.id == document_id)
        .first()
    )

    if document is None:
        return False

    db.delete(document)
    db.commit()

    return True


def get_document_statistics(db: Session):

    documents = db.query(Document).all()

    return {
        "total_documents": len(documents),
        "total_characters": sum(doc.character_count for doc in documents),
        "total_words": sum(doc.word_count for doc in documents),
        "total_reading_time": sum(doc.reading_time for doc in documents),
    }