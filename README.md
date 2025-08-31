## 🚀 Procurement Assignments – Full Stack Solutions

This repository contains 5 independent assignments built using Node.js, Python, MongoDB, Redis, and AI models.
Each assignment is in its own folder with detailed setup, folder structure, code, and examples.

📂 Repository Structure
ALL 5 ASSIGNMENTS/
 ├── Assignment 1/
 ├── Assignment 2/
 ├── Assignment 3/
 ├── Assignment 4/
 ├── Assignment 5/
 --.gitignore
 └── README.md

## 🟢 Assignment 1: Business Rules Processor (Node.js)
📌 Problem

- **Apply business rules to a Purchase Requisition (PR). Example:**

Auto-approve if amount < 10,000

Set urgency = High if delivery days < 3

📂 Folder Structure
assignment1-business-rules/
 ├── rules.json
 ├── server.js
 └── package.json

▶️ Setup
cd assignment1-business-rules
npm install
node server.js

📜 Example Request
POST http://localhost:3000/processPR
{
  "id": "PR1001",
  "totalAmount": 8000,
  "deliveryDays": 2
}

📜 Example Response
{
  "id": "PR1001",
  "totalAmount": 8000,
  "deliveryDays": 2,
  "status": "Approved",
  "urgency": "High"
}

#### 🟢 Assignment 2: Spend Analysis (Node.js + MongoDB)
📌 Problem

- **Generate a vendor spend report by joining Purchase Orders (POs) and Invoices.**

📂 Folder Structure
assignment2-spend-analysis/
 ├── server.js
 └── package.json

▶️ Setup
cd assignment2-spend-analysis
npm install
node server.js

🗄️ MongoDB Sample Data
db.purchaseorders.insertMany([
  { vendor: "VendorA", amount: 5000 },
  { vendor: "VendorA", amount: 7000 },
  { vendor: "VendorB", amount: 15000 }
]);

db.invoices.insertMany([
  { vendor: "VendorA", paidAmount: 6000 },
  { vendor: "VendorB", paidAmount: 10000 }
]);

📜 Example Response
[
  { "vendor": "VendorA", "poTotal": 12000, "invoiceTotal": 6000 },
  { "vendor": "VendorB", "poTotal": 15000, "invoiceTotal": 10000 }
]

## 🟢 Assignment 3: Summarization Microservice (Python, FastAPI)
📌 Problem

- **Summarize PR descriptions into short text using HuggingFace Transformers.**

📂 Folder Structure
assignment3-summarization-service/
 ├── main.py
 ├── requirements.txt

▶️ Setup
cd assignment3-summarization-service
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

📜 Example Request
POST http://localhost:8000/summarize
{
  "description": "This purchase requisition is for urgent procurement of 100 laptops needed within 2 days for new employees joining."
}

📜 Example Response
{
  "summary": "Urgent procurement of 100 laptops required within 2 days."
}

## 🟢 Assignment 4: Role-Based Filtering (Node.js + Redis)
📌 Problem

- **Restrict PR access based on role-based permissions (plants + maxAmount).**

## Cache permissions in Redis

Filter PRs from MongoDB

📂 Folder Structure
assignment4-role-based-filtering/
 ├── permissions.json
 ├── server.js
 └── package.json

▶️ Setup
cd assignment4-role-based-filtering
npm install
node server.js

🗄️ MongoDB Sample Data
db.prs.insertMany([
  { plant: "PlantA", totalAmount: 30000 },
  { plant: "PlantB", totalAmount: 45000 },
  { plant: "PlantC", totalAmount: 60000 }
]);

📜 Example Response
[
  { "_id": "...", "plant": "PlantA", "totalAmount": 30000 },
  { "_id": "...", "plant": "PlantB", "totalAmount": 45000 }
]

## 🟢 Assignment 5: AI Agent Orchestration (Python, FastAPI)
📌 Problem

**Simulate an AI Agent flow (Document Extraction → Validation → Creation) based on a config file.**

📂 Folder Structure
assignment5-agent-orchestration/
 ├── main.py
 ├── flow.json
 ├── requirements.txt

▶️ Setup
cd assignment5-agent-orchestration
pip install -r requirements.txt
uvicorn main:app --reload --port 8001

📜 Example Request
POST http://localhost:8001/executeAgentFlow
{
  "field1": "Purchase Requisition Data"
}

📜 Example Response
{
  "extracted": "Purchase Requisition Data",
  "validated": true,
  "saved": true
}

✅ Tech Stack Used

Node.js + Express → REST APIs

MongoDB → Data persistence

Redis → Caching role permissions

Python (FastAPI) → Microservices & AI Orchestration

HuggingFace Transformers → Text summarization

▶️ How to Run All Assignments

Clone the repo:

git clone https://github.com/your-username/procurement-assignments.git
cd ship the folder


Navigate to each assignment and follow its setup instructions.

Run APIs using:

node server.js (for Node.js assignments)

uvicorn main:app --reload (for Python assignments)