from sqlalchemy.orm import Session

from app.models.document import Document


def save_document(
    db: Session,
    filename: str,
    filepath: str,
    content: str,
):
    document = Document(
        filename=filename,
        filepath=filepath,
        content=content,
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
            (Document.content.ilike(f"%{query}%"))
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