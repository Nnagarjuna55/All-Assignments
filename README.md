Here’s a polished version of your **repository documentation** — structured for clarity, professionalism, and easy understanding for anyone reviewing it on GitHub 👇

---

# 🚀 Procurement Assignments – Full Stack Solutions

This repository contains **5 independent assignments** built using **Node.js, Python, MongoDB, Redis, and AI models**.
Each assignment is in its own folder with **setup steps, folder structure, code, and examples**.

---

## 📂 Repository Structure

```
ALL 5 ASSIGNMENTS/
 ├── Assignment 1/   # Business Rules Processor (Node.js)
 ├── Assignment 2/   # Spend Analysis (Node.js + MongoDB)
 ├── Assignment 3/   # Summarization Microservice (Python + FastAPI)
 ├── Assignment 4/   # Role-Based Filtering (Node.js + Redis + MongoDB)
 ├── Assignment 5/   # AI Agent Orchestration (Python + FastAPI)
 ├── .gitignore
 └── README.md
```

---

## 🟢 Assignment 1: Business Rules Processor (Node.js)

📌 **Problem Statement**
Apply business rules to a Purchase Requisition (PR). Example rules:

* Auto-approve if **amount < 10,000**
* Set **urgency = High** if **delivery days < 3**

📂 **Folder Structure**

```
Assignment 1/
 ├── rules.json
 ├── server.js
 └── package.json
```

▶️ **Setup**

```bash
cd Assignment 1
npm install
node server.js
```

📜 **Example Request**

```http
POST http://localhost:3000/processPR
{
  "id": "PR1001",
  "totalAmount": 8000,
  "deliveryDays": 2
}
```

📜 **Example Response**

```json
{
  "id": "PR1001",
  "totalAmount": 8000,
  "deliveryDays": 2,
  "status": "Approved",
  "urgency": "High"
}
```

---

## 🟢 Assignment 2: Spend Analysis (Node.js + MongoDB)

📌 **Problem Statement**
Generate a **vendor spend report** by joining Purchase Orders (POs) and Invoices.

📂 **Folder Structure**

```
Assignment 2/
 ├── server.js
 └── package.json
```

▶️ **Setup**

```bash
cd Assignment 2
npm install
node server.js
```

🗄️ **MongoDB Sample Data**

```js
db.purchaseorders.insertMany([
  { vendor: "VendorA", amount: 5000 },
  { vendor: "VendorA", amount: 7000 },
  { vendor: "VendorB", amount: 15000 }
]);

db.invoices.insertMany([
  { vendor: "VendorA", paidAmount: 6000 },
  { vendor: "VendorB", paidAmount: 10000 }
]);
```

📜 **Example Response**

```json
[
  { "vendor": "VendorA", "poTotal": 12000, "invoiceTotal": 6000 },
  { "vendor": "VendorB", "poTotal": 15000, "invoiceTotal": 10000 }
]
```

---

## 🟢 Assignment 3: Summarization Microservice (Python, FastAPI)

📌 **Problem Statement**
Summarize PR descriptions into short text using **HuggingFace Transformers**.

📂 **Folder Structure**

```
Assignment 3/
 ├── main.py
 ├── requirements.txt
```

▶️ **Setup**

```bash
cd Assignment 3
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

📜 **Example Request**

```http
POST http://localhost:8000/summarize
{
  "description": "This purchase requisition is for urgent procurement of 100 laptops needed within 2 days for new employees joining."
}
```

📜 **Example Response**

```json
{
  "summary": "Urgent procurement of 100 laptops required within 2 days."
}
```

---

## 🟢 Assignment 4: Role-Based Filtering (Node.js + Redis + MongoDB)

📌 **Problem Statement**
Restrict PR access based on **role-based permissions** (plants + maxAmount).

* Permissions cached in **Redis**
* PRs fetched and filtered from **MongoDB**

📂 **Folder Structure**

```
Assignment 4/
 ├── permissions.json
 ├── server.js
 └── package.json
```

▶️ **Setup**

```bash
cd Assignment 4
npm install
node server.js
```

🗄️ **MongoDB Sample Data**

```js
db.prs.insertMany([
  { plant: "PlantA", totalAmount: 30000 },
  { plant: "PlantB", totalAmount: 45000 },
  { plant: "PlantC", totalAmount: 60000 }
]);
```

📜 **Example Response**

```json
[
  { "_id": "...", "plant": "PlantA", "totalAmount": 30000 },
  { "_id": "...", "plant": "PlantB", "totalAmount": 45000 }
]
```

---

## 🟢 Assignment 5: AI Agent Orchestration (Python, FastAPI)

📌 **Problem Statement**
Simulate an **AI Agent flow**:

1. Document Extraction
2. Validation
3. Creation

📂 **Folder Structure**

```
Assignment 5/
 ├── main.py
 ├── flow.json
 ├── requirements.txt
```

▶️ **Setup**

```bash
cd Assignment 5
pip install -r requirements.txt
uvicorn main:app --reload --port 8001
```

📜 **Example Request**

```http
POST http://localhost:8001/executeAgentFlow
{
  "field1": "Purchase Requisition Data"
}
```

📜 **Example Response**

```json
{
  "extracted": "Purchase Requisition Data",
  "validated": true,
  "saved": true
}
```

---

## ✅ Tech Stack Used

* **Node.js + Express** → REST APIs
* **MongoDB** → Data persistence
* **Redis** → Caching role permissions
* **Python (FastAPI)** → Microservices & AI orchestration
* **HuggingFace Transformers** → Text summarization

---

## ▶️ How to Run All Assignments

1. Clone the repo:

```bash
git clone https://github.com/Nnagarjuna55/All-Assignments.git
cd ALL-ASSIGNMENTS
```

2. Navigate to each assignment and follow its setup instructions.

3. Run APIs using:

```bash
node server.js   # For Node.js assignments
uvicorn main:app --reload   # For Python assignments
```

---
