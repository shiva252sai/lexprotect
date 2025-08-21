import json
from sentence_transformers import SentenceTransformer
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder
from sklearn.pipeline import Pipeline
import joblib
import os

# Load training data
with open("data/classifier/train_examples.json", "r", encoding="utf-8") as f:
    data = json.load(f)

queries = [item["query"] for item in data]
labels = [item["label"] for item in data]

# Load embedding model
model = SentenceTransformer("all-MiniLM-L6-v2")
X = model.encode(queries)
y = LabelEncoder().fit_transform(labels)

# Train classifier
clf = LogisticRegression(max_iter=1000)
clf.fit(X, y)

# Wrap it in a pipeline with the embedder
pipeline = Pipeline([
    ("embedder", model),
    ("classifier", clf)
])

# Save both classifier and label encoder
os.makedirs("models", exist_ok=True)
joblib.dump(clf, "models/classifier.joblib")
joblib.dump(LabelEncoder().fit(labels), "models/label_encoder.joblib")

print("✅ Classifier trained and saved to models/classifier.joblib")
