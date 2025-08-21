import joblib
from sentence_transformers import SentenceTransformer

# Load saved model
clf = joblib.load("models/classifier.joblib")
label_encoder = joblib.load("models/label_encoder.joblib")
embedder = SentenceTransformer("all-MiniLM-L6-v2")

def classify_query(query: str):
    embedding = embedder.encode([query])
    prediction = clf.predict(embedding)[0]
    label = label_encoder.inverse_transform([prediction])[0]
    return label
