from fastapi import FastAPI

from app.core.database import Base, engine
from app.routers.home import router as home_router
from app.routers.health import router as health_router

from fastapi.middleware.cors import CORSMiddleware

from app.routers.notes import router as notes_router
from app.routers.files import router as files_router


Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="ResearchOS API",
    version="1.0.0",
    description="Backend API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(home_router)
app.include_router(health_router)
app.include_router(notes_router)
app.include_router(files_router)

@app.get("/")
def home():
    return {
        "project": "ResearchOS",
        "status": "Running",
    }