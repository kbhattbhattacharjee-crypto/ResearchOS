from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.note import NoteCreate, NoteResponse
from app.services.note_service import (
    get_all_notes,
    create_note,
    update_note,
    delete_note,
)

router = APIRouter(prefix="/notes", tags=["Notes"])


@router.get("/", response_model=list[NoteResponse])
def read_notes(db: Session = Depends(get_db)):
    return get_all_notes(db)


@router.post("/", response_model=NoteResponse)
def add_note(note: NoteCreate, db: Session = Depends(get_db)):
    return create_note(db, note)


@router.put("/{note_id}", response_model=NoteResponse)
def edit_note(
    note_id: int,
    note: NoteCreate,
    db: Session = Depends(get_db),
):
    updated = update_note(db, note_id, note)

    if updated is None:
        return {"error": "Note not found"}

    return updated


@router.delete("/{note_id}")
def remove_note(
    note_id: int,
    db: Session = Depends(get_db),
):
    deleted = delete_note(db, note_id)

    if not deleted:
        return {"error": "Note not found"}

    return {"message": "Note deleted successfully"}