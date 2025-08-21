from pydantic import BaseModel

class ClassifyRequest(BaseModel):
    query: str
