# Markdown Blog App (Full Stack)

## Project Overview

This is a full-stack blog application where users can create, edit, update, and read blog posts written in Markdown.
The application includes authentication, a dashboard for managing blogs, and a responsive user interface.

The project demonstrates full-stack development using React for the frontend and Node.js with Express for the backend.

---

## GitHub Repository

https://github.com/iemkajal/markdown-blog-app

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Context API

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* JWT (JSON Web Token)

---

## Setup Instructions

### 1. Clone the Repository

git clone https://github.com/iemkajal/markdown-blog-app.git

### 2. Navigate to Project Folder

cd markdown-blog-app

---

### 3. Backend Setup

cd backend
npm install

Create a `.env` file inside the backend folder and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start the backend server:

npm start

Backend will run on:
http://localhost:5000

---

### 4. Frontend Setup

Open a new terminal and run:

cd frontend
npm install
npm run dev

Frontend will run on:
http://localhost:5173

---

## Design Decisions

**Separation of Frontend and Backend**
The frontend and backend are separated into different folders to maintain clean architecture and easier scalability.

**REST API Structure**
The backend uses REST APIs for handling blog operations such as creating, updating, and deleting posts.

**JWT Authentication**
JWT tokens are used for secure user authentication and session handling.

**Component Based Architecture**
The frontend uses reusable React components to maintain modular and maintainable code.

---

## Author

KAJAL BARTHWAL
MCA Graduate | Full Stack Developer
