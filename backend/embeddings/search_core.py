from sentence_transformers import SentenceTransformer
from chromadb import PersistentClient

# Load model & vector DB
client = PersistentClient(path="data/chroma_db")
collection = client.get_or_create_collection(name="legal_clauses")
model = SentenceTransformer("all-MiniLM-L6-v2")

def search_clauses(query: str, top_k: int = 5):
    print("Searching for:", query)

    embedding = model.encode(query).tolist()

    results = collection.query(
        query_embeddings=[embedding],
        n_results=top_k
    )

    print("Results:", results)  # ✅ Moved here, after it’s defined

    response = []
    for doc, meta, dist in zip(results["documents"][0], results["metadatas"][0], results["distances"][0]):
        response.append({
            "section": meta["section"],
            "title": meta["title"],
            "source": meta["source"],
            "text": doc,
            "score": 1 - dist
        })

    return response
