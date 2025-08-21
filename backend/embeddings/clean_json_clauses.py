import json
import os
import re

def clean_text(text: str) -> str:
    text = text.strip()
    text = re.sub(r'\n+', '\n', text)  # collapse multiple newlines
    text = re.sub(r'[ \t]+', ' ', text)  # collapse spaces/tabs
    return text

# Input/Output paths
raw_files = [
    "data/clauses/indian_penal_code.json",
    "data/clauses/criminal_procedure_code.json",
    "data/clauses/indian_evidence_act.json"
]

output_dir = "data/clauses_cleaned"
os.makedirs(output_dir, exist_ok=True)

for file_path in raw_files:
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    cleaned_data = []
    for clause in data:
        text = clean_text(clause["text"])
        if len(text) < 100:
            continue  # Skip junk clauses

        clause["text"] = text
        clause["title"] = clause["title"].strip()
        cleaned_data.append(clause)

    # Save cleaned version
    output_file = os.path.join(output_dir, os.path.basename(file_path))
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(cleaned_data, f, indent=2, ensure_ascii=False)

    print(f"✅ Cleaned and saved: {output_file} ({len(cleaned_data)} valid clauses)")
