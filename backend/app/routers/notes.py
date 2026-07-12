from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.note import NoteCreate, NoteResponse
from app.services.note_service import (
    get_all_notes,
    create_note,
    update_note,
    delete_note,
    search_notes,
)

router = APIRouter(prefix="/notes", tags=["Notes"])


@router.get(
    "/",
    response_model=list[NoteResponse],
    summary="Get all notes",
)
def read_notes(
    page: int = 1,
    limit: int = 10,
    db: Session = Depends(get_db),
):
    return get_all_notes(
        db=db,
        page=page,
        limit=limit,
    )


@router.get(
    "/search",
    response_model=list[NoteResponse],
    summary="Search notes",
)
def search(query: str, db: Session = Depends(get_db)):
    return search_notes(db, query)


@router.post(
    "/",
    response_model=NoteResponse,
    summary="Create a note",
)
def add_note(note: NoteCreate, db: Session = Depends(get_db)):
    return create_note(db, note)


@router.put(
    "/{note_id}",
    response_model=NoteResponse,
    summary="Update note",
)
def edit_note(
    note_id: int,
    note: NoteCreate,
    db: Session = Depends(get_db),
):
    updated = update_note(db, note_id, note)

    if updated is None:
        raise HTTPException(
            status_code=404,
            detail="Note not found",
        )

    return updated


@router.delete(
    "/{note_id}",
    summary="Delete note",
)
def remove_note(
    note_id: int,
    db: Session = Depends(get_db),
):
    deleted = delete_note(db, note_id)

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Note not found",
        )

    return {
        "message": "Note deleted successfully"
    }