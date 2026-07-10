from fastapi import FastAPI

from app.routers.home import router as home_router
from app.routers.health import router as health_router
from app.routers.notes import router as notes_router

app = FastAPI(
    title="ResearchOS API",
    version="1.0.0",
    description="Backend API for ResearchOS"
)

app.include_router(home_router)
app.include_router(health_router)
app.include_router(notes_router)