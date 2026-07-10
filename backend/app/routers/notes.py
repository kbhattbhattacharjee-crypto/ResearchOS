from fastapi import APIRouter

from app.schemas.note import Note
from app.services.note_service import (
    get_all_notes,
    create_note,
    update_note,
    delete_note,
)

router = APIRouter()


@router.get("/notes")
def get_notes():
    return get_all_notes()


@router.post("/notes")
def add_note(note: Note):
    return create_note(note)


@router.put("/notes/{note_id}")
def edit_note(note_id: int, note: Note):

    updated = update_note(note_id, note)

    if updated is None:
        return {
            "error": "Note not found"
        }

    return updated


@router.delete("/notes/{note_id}")
def remove_note(note_id: int):

    deleted = delete_note(note_id)

    if not deleted:
        return {
            "error": "Note not found"
        }

    return {
        "message": "Note deleted successfully"
    }