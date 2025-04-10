from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI(title="Health Assistant AI Service")

class Symptoms(BaseModel):
    symptoms: List[str]

@app.get("/")
async def root():
    return {"message": "Welcome to the Health Assistant AI Service"}

@app.post("/analyze-symptoms")
async def analyze_symptoms(data: Symptoms):
    try:
        # TODO: Implement OpenAI integration
        return {
            "possible_conditions": ["Example Condition"],
            "should_see_doctor": False,
            "recommendations": ["Example recommendation"]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 