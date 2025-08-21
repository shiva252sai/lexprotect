from fastapi import APIRouter
from pydantic import BaseModel
from typing import List
from backend.embeddings.search_core import search_clauses  # Ensure this file exists
from backend.llm.llm_reranker import rerank_with_llm

router = APIRouter()

# Request model
class AnalyzeRequest(BaseModel):
    query: str
    top_k: int = 5  # Default number of matches

# Response model
class AnalyzeResponse(BaseModel):
    query: str
    llm_result: dict
    original_matches: List[dict]

# Root endpoint for testing
@router.get("/")
def root():
    return {"message": "Legal-Tech API is running!"}

# Analyze = classifier + search + LLM rerank
@router.post("/analyze")
def analyze(payload: AnalyzeRequest):
    top_matches = search_clauses(payload.query, payload.top_k)
    llm_result = rerank_with_llm(payload.query, top_matches[:3])

    return {
        "query": payload.query,
        "llm_result": {
            "section": llm_result["legal_summary"]["title"],
            "explanation": llm_result["legal_summary"]["explanation"],
            "steps": llm_result["legal_summary"]["steps"],
            "verdict": llm_result["legal_summary"]["verdict"]
        },
        "original_matches": top_matches
    }
