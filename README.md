# Lex Protect  
Lex Protect is an AI-powered legal-tech application designed to help users determine whether police actions are legal under Indian laws.  

Unlike ChatGPT, which does not have access to all Indian laws or a domain-specific dataset, **Lex Protect** was built specifically to solve this problem. We collected legal documents, processed them, and trained a model so that users get **accurate, law-backed answers** instead of generic ones.

---

## Demo Video

<video src="https://github.com/shiva252sai/lexprotect/raw/main/demo/demo.mp4" controls width="700">
  Your browser does not support the video tag.
</video>


---

## Why Lex Protect?  
- **ChatGPT Limitation:** ChatGPT is trained on general data and cannot access every Indian law in detail.  
- **Our Solution:** Lex Protect extracts laws directly from authentic legal PDFs, converts them into a structured dataset, and uses them to train a custom model on **1000+ labeled queries** for better accuracy and reliability.  

---

## How We Built It  

### 1. Law Extraction from PDFs  
- Collected laws from government websites and official legal sources.  
- Converted PDF documents into text using Python libraries (`PyPDF2`, `pdfplumber`).  
- Cleaned and structured the data for training.  

### 2. Model Training  
- Created a labeled dataset of **1000 queries** with verdicts like *Legal* or *Illegal*.  
- Trained a classification model using **LegalBERT** for Indian laws.  
- Integrated the model with the backend to give **real-time predictions**.  

### 3. Photo Upload & Auto-Mail Feature  
- Users can **upload photos or videos** of illegal police actions.  
- The system automatically **mails the evidence** to the concerned government authority.  

---

## Features  
- ✅ Domain-specific AI trained on Indian laws  
- ✅ Real-time legal verdicts for police actions  
- ✅ Upload photo/video proof for government escalation  
- ✅ Clean frontend + robust backend integration  

---

## Frontend & Backend  
- **Frontend:** Built using React for smooth user experience.  
- **Backend:** Python (FastAPI) handles model inference, PDF processing, and email automation.  

---

## Project Size Notice  
Due to GitHub’s file size restrictions, only the **frontend**, **backend code**, and **model training scripts** are uploaded here. Large raw datasets and other assets are excluded.  

---

## Future Enhancements  
- Expand training dataset with **more laws & cases**  
- Add **multi-language support** for regional users  
- Integrate **real-time legal advice chat**  
- Deploy on **cloud servers** for nationwide scalability  

---

## How to Run the Project  
```bash
# Clone the repository
git clone https://github.com/shiva252sai/lex-protect.git

# Navigate to project folder
cd lex-protect

# Backend Setup
cd backend
pip install -r requirements.txt
python main.py

# Frontend Setup
cd ../frontend
npm install
npm start
