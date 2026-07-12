from pathlib import Path
import shutil

from fastapi import APIRouter, UploadFile, File

from app.utils.pdf import extract_text_from_pdf

from sqlalchemy.orm import Session
from fastapi import Depends

from app.core.database import get_db
from app.services.document_service import (
    save_document,
    get_all_documents,
    search_documents,
    delete_document,
    get_document_statistics,
)


router = APIRouter(
    prefix="/files",
    tags=["Files"],
)

UPLOAD_FOLDER = Path("uploads")
UPLOAD_FOLDER.mkdir(exist_ok=True)


@router.post("/upload")
async def upload_file(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    destination = UPLOAD_FOLDER / file.filename

    with destination.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    text = ""

    if file.filename.lower().endswith(".pdf"):
        text = extract_text_from_pdf(str(destination))

    document = save_document(
        db=db,
        filename=file.filename,
        filepath=str(destination),
        content=text,
    )

    return {
        "id": document.id,
        "filename": document.filename,
        "characters": len(document.content),
        "preview": document.content[:500],
    }
    
@router.get("/documents")
def list_documents(
    db: Session = Depends(get_db),
):
    return get_all_documents(db)

@router.get("/search")
def search(
    query: str,
    db: Session = Depends(get_db),
):
    return search_documents(
        db=db,
        query=query,
    )
    
from fastapi import HTTPException


@router.delete("/{document_id}")
def remove_document(
    document_id: int,
    db: Session = Depends(get_db),
):
    deleted = delete_document(
        db=db,
        document_id=document_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Document not found",
        )

    return {
        "message": "Document deleted successfully"
    }
    
@router.get("/stats")
def document_statistics(
    db: Session = Depends(get_db),
):
    return get_document_statistics(db)