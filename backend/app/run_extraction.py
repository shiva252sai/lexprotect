import sys, os, json
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))

from backend.utils.pdf_extractor import extract_clauses_from_pdf

pdf_dir = "data/pdfs"
output_path = "data/clauses/clauses.json"
os.makedirs("data/clauses", exist_ok=True)

all_clauses = []
for file in os.listdir(pdf_dir):
    if file.endswith(".pdf"):
        law_name = file.replace(".pdf", "").replace("_", " ").title()
        print(f"🔍 Extracting from: {file} ({law_name})")
        clauses = extract_clauses_from_pdf(os.path.join(pdf_dir, file), law_name)
        all_clauses.extend(clauses)

with open(output_path, "w", encoding="utf-8") as f:
    json.dump(all_clauses, f, indent=2, ensure_ascii=False)

print(f"✅ Extracted {len(all_clauses)} clauses from {len(os.listdir(pdf_dir))} PDFs.")
