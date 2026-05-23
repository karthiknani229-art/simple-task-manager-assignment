# Simple Task Manager

A full-stack task management application built with React and Node.js. Intentionally minimal and focused on clean API design, proper state management, and code clarity.

## Tech Stack

**Frontend:** React.js, Vite, Axios

**Backend:** Node.js, Express.js

**Storage:** In-memory (no database — intentional for assignment scope)

## Features

- View all tasks
- Add new tasks
- Mark tasks as completed
- Delete tasks
- Loading and error handling
- Structured REST API with input validation

## Project Structure

```
simple-task-manager/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── backend/
│   ├── index.js
│   └── package.json
│
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | Fetch all tasks |
| POST | /tasks | Create a new task |
| PATCH | /tasks/:id | Toggle task completion |
| DELETE | /tasks/:id | Delete a task |

## Task Data Model

```json
{
  "id": "string",
  "title": "string",
  "completed": false,
  "createdAt": "string"
}
```

## Local Setup

**1. Clone the repository**

```bash
git clone https://github.com/karthiknani229-art/simple-task-manager-assignment.git
cd simple-task-manager-assignment
```

**2. Backend setup**

```bash
cd backend
npm install
npm run dev
```

Server runs at: http://localhost:5000

**3. Frontend setup**

```bash
cd frontend
npm install
npm run dev
```

App runs at: http://localhost:5173

## Author

Penta Karthik — [GitHub](https://github.com/karthiknani229-art)
