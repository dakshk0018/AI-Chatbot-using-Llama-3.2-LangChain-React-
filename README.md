<h1 align="center">🤖 Llama 3.2 AI Chatbot</h1>

<p align="center">
An intelligent AI chatbot built using <b>Llama 3.2</b>, <b>LangChain</b>, <b>React</b>, and <b>SQLite3</b>.
</p>

An intelligent, full-stack AI chatbot built using Llama 3.2 integrated through LangChain, featuring a modern React frontend and a SQLite3 database for persistent storage and agent functionality. The project is developed inside a Python virtual environment to ensure dependency isolation and reproducibility.
🚀 Features
🧠 Llama 3.2 as the core Large Language Model (LLM)
🔗 LangChain for prompt management, agent orchestration, and tool integration
⚛️ React-based responsive frontend with an intuitive chat interface
💾 SQLite3 database for storing conversations, agent data, and application state
🤖 AI agents capable of handling tasks and maintaining context
🔄 Real-time communication between frontend and backend
🐍 Python backend running in a dedicated virtual environment
📦 Modular and scalable project structure

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.11-blue?logo=python">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react">
  <img src="https://img.shields.io/badge/LangChain-Agent-green">
  <img src="https://img.shields.io/badge/Llama-3.2-orange">
  <img src="https://img.shields.io/badge/SQLite-Database-blue">
  <img src="https://img.shields.io/github/license/YOUR_USERNAME/YOUR_REPO">
</p>



<img width="942" height="450" alt="Screenshot 2026-07-28 at 4 11 04 PM" src="https://github.com/user-attachments/assets/e0820152-bc5a-422c-bf84-f50be56ff85b" />




| Feature                    | Description                   |
| -------------------------- | ----------------------------- |
| 🤖 AI Chat                 | Chat with Llama 3.2           |
| 🧠 LangChain               | Agent execution               |
| 💾 SQLite                  | Persistent storage            |
| ⚡ FastAPI                  | High-performance backend      |
| ⚛ React                    | Interactive UI                |
| 📜 Chat History            | Stores previous conversations |
| 🔄 Real-time Communication | Instant responses             |




## 📂 Folder Structure

```text
AI-Chatbot/
│
├── backend/
│   ├── app.py
│   ├── database.py
│   ├── agents/
│   ├── models/
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── assets/
│
├── README.md
│
└── .gitignore
```



## 💻 Tech Stack

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)

![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi)

![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite)

![LangChain](https://img.shields.io/badge/LangChain-00A67E?style=for-the-badge)

![Llama3.2](https://img.shields.io/badge/Llama-3.2-orange?style=for-the-badge)


## ⚙ Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-Chatbot.git
```

### Backend

```bash
cd backend

python -m venv venv

source venv/bin/activate

pip install -r requirements.txt
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

## 🚀 Roadmap

- [x] React Frontend
- [x] SQLite Database
- [x] LangChain Agents
- [x] Llama 3.2
- [ ] Authentication
- [ ] Docker
- [ ] Cloud Deployment
- [ ] Voice Chat
- [ ] RAG Support
- [ ] Multi-Agent Collaboration
