🛒 Node.js Retail CI/CD Application
 
A full-stack Retail Web Application built using Node.js, Express, HTML/CSS/JavaScript, containerized with Docker, and automated using GitHub Actions CI (with Jenkins-ready CI/CD architecture).

This project demonstrates a real-world DevOps workflow from development to CI/CD.

📌 Features

 Node.js + Express backend

 Static frontend (HTML, CSS, JavaScript)

 REST APIs (/health, /products)

 Docker & Docker Compose support

 GitHub Actions CI pipeline

 Jenkins-ready CI/CD structure

 Clean project structure

📌 Features

 Node.js + Express backend

 Static frontend (HTML, CSS, JavaScript)

 REST APIs (/health, /products)

 Docker & Docker Compose support
 
🧱 Tech Stack
Layer:	Technology
Frontend:	HTML, CSS, JavaScript
Backend:	Node.js, Express
Container:	Docker, Docker Compose
CI:	GitHub Actions
CI/CD: Ready	Jenkins
Versioning:	Git & GitHub

Project Structure
nodejs-retail-cicd/
│
├── frontend/                # Frontend UI
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│
├── src/                     # Backend source
│   └── index.js
│
├── tests/                   # Backend tests
│
├── .github/workflows/
│   └── ci.yml               # GitHub Actions CI pipeline
│
├── Dockerfile               # Docker build file
├── docker-compose.yml       # Docker Compose config
├── package.json
├── README.md
└── .gitignore

🚀 API Endpoints
Endpoint	Method	  Description
/health	  GET	      Health check
/products	GET	      List of products
/	        GET	      Frontend UI

🖥️ Run Locally (Without Docker)
npm install
npm start

Open browser:
http://localhost:3000

Run with Docker
Build Image
docker build -t retail-app .

Run Container
docker run -p 3000:3000 retail-app

Run with Docker Compose (Recommended)
docker compose up --build

Stop containers:
docker compose down
✅ Jenkins-ready CI/CD structure

✅ Clean project structure
