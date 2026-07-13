from sqlalchemy.orm import Session

from app.models.document import Document


def save_document(
    db: Session,
    filename: str,
    filepath: str,
    extracted_text: str,
):
    document = Document(
        filename=filename,
        filepath=filepath,
        extracted_text=extracted_text,
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

    total_documents = len(documents)

    total_characters = sum(
        len(doc.extracted_text or "")
        for doc in documents
    )

    return {
        "total_documents": total_documents,
        "total_characters": total_characters,
    }