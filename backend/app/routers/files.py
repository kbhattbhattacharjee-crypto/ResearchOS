from pathlib import Path
import shutil

from fastapi import APIRouter, UploadFile, File, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.utils.pdf import extract_text_from_pdf
from app.services.document_service import (
    save_document,
    get_all_documents,
    search_documents,
    delete_document,
    get_document_statistics,
)
from app.nlp.document_analyzer import analyze_document

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
    
    analysis = analyze_document(text)

    document = save_document(
            db=db,
            filename=file.filename,
            filepath=str(destination),
            extracted_text=text,
            summary=analysis["summary"],
            keywords=", ".join(analysis["keywords"]),
            reading_time=analysis["reading_time"],
            word_count=analysis["word_count"],
            character_count=analysis["character_count"],
        )

    return {
        "id": document.id,
        "filename": document.filename,
    
        "preview": document.extracted_text[:1000],
    
        "summary": document.summary,
    
        "keywords": document.keywords,
    
        "word_count": document.word_count,
    
        "character_count": document.character_count,
    
        "reading_time": document.reading_time,
    }

@router.get("/documents")
def list_documents(
    db: Session = Depends(get_db),
):
    documents = get_all_documents(db)

    return [

        {
            "id": doc.id,
            "filename": doc.filename,
            "preview": doc.extracted_text[:400],
            "characters": len(doc.extracted_text),
        }

        for doc in documents

    ]


@router.get("/search")
def search(
    query: str,
    db: Session = Depends(get_db),
):
    return search_documents(
        db=db,
        query=query,
    )


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