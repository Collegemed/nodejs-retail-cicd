Node.js Retail CI/CD Application
 
Overview

    This project is a DevOps-oriented retail web application designed to demonstrate the integration of modern software development practices with Continuous Integration (CI), containerization, and automation.

    Built using Node.js and Express.js, the application provides RESTful APIs and a lightweight frontend, supported by a fully automated CI pipeline using GitHub Actions and containerized deployment using Docker.

Objectives

    Develop a scalable full-stack retail web application
    Implement RESTful APIs for structured communication
    Automate build and testing using GitHub Actions
    Ensure environment consistency via Docker containerization
    Design a CI/CD-ready architecture (Jenkins-compatible)
    Follow industry-standard DevOps best practices

Features

  Backend
  
    Node.js with Express.js framework
  
  RESTful APIs:
  
    /health — Application health check
    /products — Product data retrieval
 
  Frontend
   
    Static UI using HTML, CSS, and JavaScript
    API-driven dynamic content rendering
    DevOps & Automation
    Continuous Integration using GitHub Actions
    Docker-based containerization
    Docker Compose for multi-service execution
    Jenkins-ready CI/CD pipeline structure

 System Architecture
   
    Developer → GitHub Repository → CI Pipeline (GitHub Actions)
             → Build & Test → Docker Image Creation
             → Deployment via Docker / Docker Compose

Workflow
    
    Code is pushed to GitHub
    CI pipeline is triggered automatically
    Dependencies are installed and tests are executed
    Docker image is built
    Application runs in a containerized environment

 Technology Stack
 
     Layer	Technology
     Frontend	HTML, CSS, JavaScript
     Backend	Node.js, Express.js
     CI Tool	GitHub Actions
     Container	Docker, Docker Compose
     Version Control	Git, GitHub
     Environment	Linux

Installation & Setup

    Run Locally
    git clone <repository-url>
    cd nodejs-retail-cicd
    npm install
    npm start
    Run with Docker
    docker build -t retail-app .
    docker run -p 3000:3000 retail-app
    Run with Docker Compose
    docker-compose up --build

Continuous Integration

    The project uses GitHub Actions to automate:

        Dependency installation
        Build process
        Application testing

    This ensures that every code change is validated before integration.

 Key Outcomes

    Fully functional retail web application
    Automated CI pipeline
    Containerized and portable deployment
    Clean and modular DevOps project structure

Limitations
   
    No authentication or authorization system
    No database integration (uses static/mock data)
    No payment gateway integration
    Not deployed to cloud (local/container-based execution only)

Future Enhancements
    
    Integrate databases (MongoDB / PostgreSQL)
    Implement full CI/CD pipeline using Jenkins
    Deploy to cloud platforms (AWS / Azure)
    Introduce Kubernetes for orchestration
    Add authentication and security layers
    Integrate monitoring tools (Prometheus, Grafana)

Contributors

    Aditya Agrawal
    Atharv Shukla
    Verma Nikhil Kumar Vipin Kumar
    Malya Singh
    Mohit Gupta

Institution: Medicaps University
Course: DevOps – Datagami Skill Based Course
Project Number: DO-41

Conclusion

    This project demonstrates a practical implementation of DevOps principles, combining application development with automation and containerization. It provides a strong foundation for building scalable, maintainable, and production-ready systems.
