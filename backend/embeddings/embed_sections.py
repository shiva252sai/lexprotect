from sentence_transformers import SentenceTransformer
from chromadb import PersistentClient  # updated import
import json
import os

# Load files
json_paths = [
    "data/clauses/indian_penal_code.json",
    "data/clauses/criminal_procedure_code.json",
    "data/clauses/indian_evidence_act.json"
]

# ✅ NEW: Chroma persistent client (recommended)
client = PersistentClient(path="data/chroma_db")
collection = client.get_or_create_collection(name="legal_clauses")

# Load model
model = SentenceTransformer("all-MiniLM-L6-v2")
print("Using model with dim:", model.get_sentence_embedding_dimension())

# Index each law
for path in json_paths:
    with open(path, "r", encoding="utf-8") as f:
        clauses = json.load(f)

    print(f"🔁 Indexing {len(clauses)} clauses from {path}...")
    for clause in clauses:
        section_id = f"{os.path.basename(path)}-sec{clause['section']}"
        embedding = model.encode(clause["text"]).tolist()

        collection.add(
            documents=[clause["text"]],
            metadatas=[{
                "section": clause["section"],
                "title": clause["title"],
                "source": os.path.basename(path)
            }],
            ids=[section_id]
        )

print("✅ All clauses embedded and stored in ChromaDB.")
