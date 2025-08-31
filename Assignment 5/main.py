from fastapi import FastAPI
import json

app = FastAPI()

with open("flow.json") as f:
    flow = json.load(f)["flow"]

def DocumentExtractionAgent(data):
    return {"extracted": data.get("field1", "N/A")}

def ValidationAgent(data):
    if not data.get("extracted"):
        return {"error": "Validation failed"}
    return {"validated": True, **data}

def CreationAgent(data):
    return {"saved": True, **data}

agents = {
    "DocumentExtractionAgent": DocumentExtractionAgent,
    "ValidationAgent": ValidationAgent,
    "CreationAgent": CreationAgent
}

@app.post("/executeAgentFlow")
async def execute_flow(input_data: dict):
    state = input_data
    for step in flow:
        state = agents[step](state)
    return state
