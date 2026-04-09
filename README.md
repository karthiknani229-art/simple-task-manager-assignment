Task Manager (Full Stack Assignment)
🚀 Overview

The application was intentionally kept simple and minimal to align with the assignment requirement of a 1–2 hour implementation.
The app allows users to create, view, update, and delete tasks with a clean and simple interface.

The implementation focuses on core functionality, API design, and code clarity, as required by the assignment.

🔗 Project Links
GitHub Repository: https://github.com/karthiknani229-art/simple-task-manager-assignment
Live Demo: (optional — add if deployed)
✨ Features
Frontend
Display list of tasks
Add new task
Mark task as completed
Delete task
Loading and error handling
Backend
REST API for task management
Basic input validation
Structured JSON responses
🛠 Tech Stack

Frontend

React (Vite)
Axios

Backend

Node.js
Express.js

Storage

In-memory (no database, as per assignment scope)
📡 API Endpoints
Method	Endpoint	Description
GET	/tasks	Fetch all tasks
POST	/tasks	Create a new task
PATCH	/tasks/	Toggle task completion
DELETE	/tasks/	Delete a task
📌 Task Data Model
{
  id: string,
  title: string,
  completed: boolean,
  createdAt: string
}
⚙️ Setup Instructions
1. Clone the repository
git clone https://github.com/karthiknani229-art/simple-task-manager-assignment.git
cd simple-task-manager-assignment
2. Backend setup
cd backend
npm install
npm run dev

Server runs at:

http://localhost:5000
3. Frontend setup
cd frontend
npm install
npm run dev

App runs at:

http://localhost:5173
💡 Notes
The application was intentionally kept simple and minimal to align with the assignment requirement of a 1–2 hour implementation.
Focus areas include:
Clean API design
Proper state management
Basic validation and error handling
No unnecessary features or over-engineering were added.
✅ Status

✔ Fully functional
✔ Meets all core requirements
✔ Ready for evaluation
