from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.api.routes import router

app = FastAPI(
    title="Legal Tech API",
    description="Backend API for Legal-Tech App",
    version="1.0.0",
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For dev; restrict later, e.g., ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],  # Allows POST, GET, OPTIONS, etc.
    allow_headers=["*"],
)

# Include all routes
app.include_router(router)

@app.get("/")
def home():
    return {"message": "Legal-Tech Backend Running!"}
