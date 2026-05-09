# FSAD Task Tracker

## Overview
FSAD Task Tracker is a simple full‑stack web application developed as part of the
Full Stack Application Development assignment.
The application allows users to create tasks, mark them as completed, and view
their task list through a clean and responsive UI.

The project demonstrates frontend–backend integration using React and Node.js
and explores AI‑assisted development.

## Tech Stack
- **Frontend:** React (JavaScript, HTML, CSS)
- **Backend:** Node.js with Express
- **Database:** In‑memory storage (for simplicity)
- **Tools:** GitHub Codespaces, GitHub Copilot

## Features
- Add new tasks
- Mark tasks as completed using a checkbox
- Clean and responsive UI
- REST API integration between frontend and backend

## Application Architecture
React Frontend  →  Express Backend  →  In‑Memory Task Store

- The React frontend handles UI, state management, and user interactions.
- The Express backend exposes REST APIs for task operations.
- The frontend communicates with the backend using HTTP requests.


## API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| GET  | /tasks  | Retrieve all tasks |
| POST | /tasks  | Add a new task |


## How to Run the Project (Using GitHub Codespaces)

1. Open the repository in **GitHub Codespaces**.
2. Start the backend:
   ```bash
   cd backend
   node server.js
3. Start the frontend:
cd frontend
npm start
4. Access the application via the forwarded port (3000).

## AI‑Assisted Development

AI tools were used to:
- Generate initial boilerplate code
- Debug frontend–backend integration issues
- Improve UI styling and structure

All AI‑generated outputs were reviewed, modified, and integrated manually.