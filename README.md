Node.js Retail Application — CI/CD Project
 Project Title

    CI/CD Pipeline Implementation for Node.js Retail Application

 Problem Statement

    Design and implement a professional CI/CD pipeline for a Node.js Retail application (source: https://github.com/Collegemed/nodejs-retail-cicd.git).

    The workflow must automate the entire software delivery lifecycle, including:

    Automated unit testing upon every commit

    Containerized artifact creation upon merging to the production branch

    Ensuring high code quality

    Enabling rapid, reliable deployments suited for enterprise environments

    This CI/CD implementation leverages GitHub Actions (or optionally Jenkins) to automate tests, container builds, and pipeline workflows for every change in the repository.

Project Overview

    Modern enterprise application delivery requires automation for:

    Rapid feedback on code

    Repeatable builds

    Reliable deployments

    Automated artifact creation

    This project demonstrates a professional DevOps approach through a CI/CD pipeline that integrates:

    Node.js application

    Unit tests

    Docker containerization

    GitHub Actions CI/CD workflows

    Objectives

The core objectives of this project are:

    Automated unit testing on every commit via GitHub Actions

    Build Docker image upon successful merge to main or production

    Verify code quality and integrity

    Containerized artifact creation for deployment

    Support eventual deployment to production (cloud or container registry)

    Ensure reliability, consistency, reproducibility of builds

Technology Stack

    Category	          Technology
    Language           Node.js
    Server            	Express
    Testing           	Jest / Supertest
    CI/CD             	GitHub Actions
    Containerization	  Docker
    Repository	        GitHub
    Deployment Target 	Docker Registry / Kubernetes

CI/CD Architecture
 
  Workflow Overview
  
    Git Push → GitHub Actions Trigger
           ↓
    Unit Tests Run Automatically
           ↓
    Test Pass → Build Docker Image
           ↓
    Docker Image Push to Registry
           ↓
    Approval / Merge to Production
           ↓
    Production Image Build + Tagging
           ↓
    Deployment (Future: Cloud / EMS / Kubernetes)

Repository Structure

    nodejs-retail-cicd/
    ├── .github/
    │   └── workflows/
    │       └── ci.yml                  # CI pipeline definition
    ├── frontend/                       # Static UI
    ├── src/                            # App backend
    ├── tests/                          # Unit tests
    ├── Dockerfile
    ├── docker-compose.yml
    ├── package.json
    ├── README.md
    └── .gitignore

CI/CD Workflow — GitHub Actions

    The GitHub Actions pipeline (ci.yml) performs the following stages:

    Checkout code

    Install dependencies

    Run unit tests

    Build Docker image

    Push Docker image on production branch

Features

    CI pipeline for automated tests
    Docker builds on merge to production
    Ensures code quality automation
    Container-ready artifacts
    Modular and extendable for cloud deployments
    Enterprise-ready delivery automation

Contributors / Team Members

    Malya Singh

    Nikhil Kumar Verma 

    Aditya Agrawal

    Atharv shukla

    Mohit Gupta

Contact

For questions or support related to this project:

    Email: nikkumver@gmail.com

    GitHub: https://github.com/Collegemed/nodejs-retail-cicd

Conclusion

    This project demonstrates a professional, automated CI/CD workflow for a Node.js Retail application. By leveraging GitHub Actions and Docker, we achieve automated testing, container creation, and enterprise-ready delivery pipelines.

