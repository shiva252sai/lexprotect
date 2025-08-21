import fitz  # PyMuPDF
import uuid
import os
import re
import re

def clean_clause_text(text: str) -> str:
    text = text.replace("\n", " ")
    text = re.sub(r'\s{2,}', ' ', text)
    text = re.sub(r'Page\s*\d+', '', text, flags=re.IGNORECASE)
    return text.strip()


def extract_clauses_from_pdf(pdf_path, law_name):
    doc = fitz.open(pdf_path)
    full_text = ""
    
    for page in doc:
        full_text += page.get_text() + "\n"

    # Regex to match "Section 1.", "SECTION 2", "Sec. 3", etc.
    clause_blocks = re.split(r'\n?(?=Section\s+\d+\.|SECTION\s+\d+\.|Sec\.?\s+\d+\.)', full_text)

    clauses = []
    for block in clause_blocks:
        block = block.strip()
        if len(block) < 30:  # Skip very short chunks (e.g., blank pages or titles)
            continue

        section_title = block.split('\n')[0].strip()
        full_clause = block.strip()

        clause = {
        "section_id": str(uuid.uuid4()),
        "law_name": law_name,
        "full_text": clean_clause_text(full_clause),
        "keywords": generate_tags(block),
        "source_file": os.path.basename(pdf_path)
        }

        clauses.append(clause)

    return clauses
def generate_tags(text: str) -> list:
    tags = []
    lowered = text.lower()
    if "arrest" in lowered: tags.append("arrest")
    if "search" in lowered: tags.append("search")
    if "warrant" in lowered: tags.append("warrant")
    if "detain" in lowered or "custody" in lowered: tags.append("detention")
    if "phone" in lowered or "device" in lowered: tags.append("digital privacy")
    if "force" in lowered or "slap" in lowered: tags.append("police violence")
    if "notice" in lowered or "41a" in lowered: tags.append("notice")
    return tags
