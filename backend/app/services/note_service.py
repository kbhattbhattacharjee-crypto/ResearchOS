from sqlalchemy.orm import Session

from app.models.note import Note


def get_all_notes(
    db: Session,
    page: int = 1,
    limit: int = 10,
):
    return (
        db.query(Note)
        .offset((page - 1) * limit)
        .limit(limit)
        .all()
    )


def create_note(db: Session, note):
    new_note = Note(
        title=note.title,
        content=note.content,
    )

    db.add(new_note)
    db.commit()
    db.refresh(new_note)

    return new_note


def update_note(db: Session, note_id: int, updated_note):
    note = db.query(Note).filter(Note.id == note_id).first()

    if note is None:
        return None

    note.title = updated_note.title
    note.content = updated_note.content

    db.commit()
    db.refresh(note)

    return note


def delete_note(db: Session, note_id: int):
    note = db.query(Note).filter(Note.id == note_id).first()

    if note is None:
        return False

    db.delete(note)
    db.commit()

    return True

def search_notes(db: Session, query: str):
    return (
        db.query(Note)
        .filter(
            (Note.title.ilike(f"%{query}%")) |
            (Note.content.ilike(f"%{query}%"))
        )
        .all()
    )