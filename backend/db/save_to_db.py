import sqlite3
import json

def save_clauses_to_db(clauses, db_path="data/clauses/clauses.db"):
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS clauses (
            id TEXT PRIMARY KEY,
            law_name TEXT,
            full_text TEXT,
            keywords TEXT,
            source_file TEXT
        )
    ''')

    for clause in clauses:
        cursor.execute('''
            INSERT INTO clauses (id, law_name, full_text, keywords, source_file)
            VALUES (?, ?, ?, ?, ?)
        ''', (
            clause["section_id"],
            clause["law_name"],
            clause["full_text"],
            json.dumps(clause["keywords"]),
            clause["source_file"]
        ))

    conn.commit()
    conn.close()
