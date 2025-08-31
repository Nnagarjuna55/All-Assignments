from fastapi import FastAPI
from pydantic import BaseModel
from transformers import pipeline

app = FastAPI()

# Force device_map="auto" to use PyTorch instead of TensorFlow
summarizer = pipeline(
    "summarization", 
    model="facebook/bart-large-cnn", 
    framework="pt"  # Force PyTorch
)

class PR(BaseModel):
    description: str

@app.post("/summarize")
async def summarize(pr: PR):
    summary = summarizer(pr.description, max_length=30, min_length=10, do_sample=False)
    return {"summary": summary[0]["summary_text"]}
