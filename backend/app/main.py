from fastapi import FastAPI

from app.core.database import Base, engine
from app.routers.home import router as home_router
from app.routers.health import router as health_router
from app.routers.notes import router as notes_router
from app.routers.files import router as files_router


Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="ResearchOS API",
    version="1.0.0",
    description="Backend API"
)

app.include_router(home_router)
app.include_router(health_router)
app.include_router(notes_router)
app.include_router(files_router)
