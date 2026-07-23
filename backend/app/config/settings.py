from pathlib import Path


# ==========================================================
# PROJECT INFORMATION
# ==========================================================

PROJECT_NAME = "ResearchOS"

VERSION = "2.0.0"

AUTHOR = "Kabbo Bhattacharjee"


# ==========================================================
# PATHS
# ==========================================================

BASE_DIR = Path(__file__).resolve().parent.parent

UPLOAD_DIR = BASE_DIR / "uploads"

CACHE_DIR = BASE_DIR / "cache"

MODEL_DIR = BASE_DIR / "models"


# ==========================================================
# SEARCH SETTINGS
# ==========================================================

TOP_K_RESULTS = 20

MAX_SEARCH_RESULTS = 100

MIN_SIMILARITY_SCORE = 0.60


# ==========================================================
# AI SETTINGS
# ==========================================================

SUMMARY_MAX_WORDS = 250

MAX_KEYWORDS = 15

DEFAULT_READING_SPEED = 200


# ==========================================================
# EMBEDDING SETTINGS
# ==========================================================

EMBEDDING_MODEL = "all-MiniLM-L6-v2"

VECTOR_DATABASE = "faiss"


# ==========================================================
# PAPER SOURCES
# ==========================================================

ENABLE_ARXIV = True

ENABLE_OPENALEX = True

ENABLE_CROSSREF = True

ENABLE_CORE = True

ENABLE_SEMANTIC_SCHOLAR = True


# ==========================================================
# RECOMMENDATION SETTINGS
# ==========================================================

MAX_RECOMMENDATIONS = 10

MIN_CITATIONS = 5