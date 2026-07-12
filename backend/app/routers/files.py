from pathlib import Path
import shutil

from fastapi import APIRouter, UploadFile, File

from app.utils.pdf import extract_text_from_pdf

router = APIRouter(
    prefix="/files",
    tags=["Files"],
)

UPLOAD_FOLDER = Path("uploads")
UPLOAD_FOLDER.mkdir(exist_ok=True)


@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    destination = UPLOAD_FOLDER / file.filename

    with destination.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    text = ""

    if file.filename.lower().endswith(".pdf"):
        text = extract_text_from_pdf(str(destination))

    return {
        "filename": file.filename,
        "characters": len(text),
        "preview": text[:500],
    }