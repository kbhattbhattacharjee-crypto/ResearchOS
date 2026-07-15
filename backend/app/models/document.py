from sqlalchemy import Column, Integer, String

from app.core.database import Base


class Document(Base):
    __tablename__ = "documents"

    id = Column(Integer, primary_key=True, index=True)

    filename = Column(String, nullable=False)

    filepath = Column(String, nullable=False)

    extracted_text = Column(String, nullable=False)

    summary = Column(String, default="")

    keywords = Column(String, default="")

    reading_time = Column(Integer, default=0)

    word_count = Column(Integer, default=0)

    character_count = Column(Integer, default=0)