import re
import os
from openai import OpenAI
from dotenv import load_dotenv

DEBUG_MODE = False  # Toggle debug logs
load_dotenv()

print("OPENAI_API_KEY:", os.getenv("OPENAI_API_KEY"))

def rerank_with_llm(query: str, top_matches: list, debug: bool = False) -> dict:
    """
    Uses OpenAI's GPT model to rerank legal sections and return a user-friendly explanation,
    suggested steps, and verdict.
    Falls back to LegalBERT top match if GPT fails.
    """

    # Prepare legal context from top matches
    context = "\n\n".join([
        f"{i+1}. Section {m.get('section', 'N/A')}: {m.get('title', '')}\n{m.get('text', '')[:250]}..."
        for i, m in enumerate(top_matches)
    ])

    # GPT Prompt
    prompt = f"""
You are a legal assistant AI trained on Indian laws like IPC, CrPC, and the Evidence Act.

A user asked the following legal question:
"{query}"

You have been given {len(top_matches)} possibly relevant legal sections. Your job is to:

1. Pick the single most relevant section and state its number and title.
2. Provide a short explanation in simple English.
3. List **3-4 actionable steps** the user can take (bullet points).
4. Say whether the action is Likely Legal, Likely Illegal, or Unclear.

Relevant Sections:
{context}

Format:
Section: <number and title>
Explanation: <short summary>
Steps:
- Step 1
- Step 2
- Step 3
Verdict: <Likely Legal / Likely Illegal / Unclear>
""".strip()

    try:
        if debug or DEBUG_MODE:
            print("\n--- PROMPT SENT TO GPT ---\n")
            print(prompt)

        client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        response = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.2
        )

        response_text = response.choices[0].message.content
        if debug or DEBUG_MODE:
            print("\n--- RAW LLM OUTPUT ---\n")
            print(response_text)

        # Extract structured fields
        section = re.search(r"section\s*[:\-]\s*(.+)", response_text, re.IGNORECASE)
        explanation = re.search(r"explanation\s*[:\-]\s*(.+)", response_text, re.IGNORECASE)
        steps_match = re.search(r"steps\s*[:\-]\s*((?:.|\n)*?)verdict", response_text, re.IGNORECASE)
        verdict = re.search(r"verdict\s*[:\-]\s*(.+)", response_text, re.IGNORECASE)

        verdict_value = verdict.group(1).strip() if verdict else ""

        friendly_verdict = {
            "Likely Illegal": "❌ Likely Illegal",
            "Likely Legal": "✅ Likely Legal",
            "Unclear": "⚠️ Unclear"
        }.get(verdict_value, "⚠️ Unable to determine legality")

        return {
            "legal_summary": {
                "title": section.group(1).strip() if section else "No section identified",
                "explanation": explanation.group(1).strip() if explanation else "Sorry, no explanation found.",
                "steps": steps_match.group(1).strip() if steps_match else "No steps provided.",
                "verdict": friendly_verdict
            },
            "raw_output": response_text
        }

    except Exception as e:
        print("LLM ERROR:", str(e))

        # Fallback using LegalBERT
        fallback_section = top_matches[0] if top_matches else {"section": "N/A", "title": "No Data", "text": "No context available."}
        fallback_text = (
            f"Fallback (LegalBERT): Based on legal embeddings, the most relevant section seems to be Section "
            f"{fallback_section.get('section', 'N/A')} - {fallback_section.get('title', 'No Title')}."
        )

        return {
            "error": str(e),
            "legal_summary": {
                "title": fallback_section.get('title', 'No section identified'),
                "explanation": fallback_text,
                "steps": "No steps (fallback mode).",
                "verdict": "⚠️ Could not analyze with GPT, fallback used"
            },
            "raw_output": ""
        }
