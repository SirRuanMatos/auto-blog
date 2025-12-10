# AutoBlog — Fullstack AI-Generated Blog with React, Node.js, PostgreSQL & AWS
---
![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Styles-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

![NodeJS](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![DrizzleORM](https://img.shields.io/badge/ORM-DrizzleORM-FFCA28?style=for-the-badge&logo=drizzle&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)

![Docker](https://img.shields.io/badge/Container-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/Cloud-AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![EC2](https://img.shields.io/badge/Compute-EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white)
![ECR](https://img.shields.io/badge/Registry-ECR-FF4F00?style=for-the-badge&logo=amazonaws&logoColor=white)
![CodeBuild](https://img.shields.io/badge/CICD-CodeBuild-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

![HuggingFace](https://img.shields.io/badge/AI-HuggingFace-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)
![Cron](https://img.shields.io/badge/Scheduler-Cron-4A5568?style=for-the-badge&logo=linux&logoColor=white)

![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

AutoBlog is a fully automated full-stack application that generates, stores, and publishes blog articles using artificial intelligence.
The system was built with a modern, production-ready architecture using React, Node.js, Drizzle ORM, PostgreSQL, Docker, and a complete AWS deployment pipeline powered by EC2, ECR, and CodeBuild.

AutoBlog delivers a fully autonomous content-generation experience:

The backend automatically generates articles using AI (HuggingFace free-tier models), including a cover image.

A scheduled job creates one new article per day without manual intervention.

The frontend displays articles with a clean, modern, responsive UI.

Deployment is fully automated:
push to main → CodeBuild builds and pushes images → EC2 pulls and updates the containers.

Everything runs in Docker containers, making the environment reproducible and cloud-ready.

Designed as a complete engineering project, AutoBlog demonstrates strong backend, frontend, automation, and AWS infrastructure skills following modern industry standards.

## Tech Stack

### **Frontend**
- **React** — component-based UI library  
- **Vite** — fast development/build tooling  
- **TailwindCSS** — utility-first styling  
- **React Router** — client-side routing  
- **Axios** — API client  
- **Docker** — containerized build/runtime

---

### **Backend**
- **Node.js** — JavaScript runtime  
- **TypeScript** — type-safe application logic  
- **Express** — lightweight HTTP server  
- **Drizzle ORM** — migrations + schema-safe PostgreSQL queries  
- **HuggingFace Inference API** — AI-powered article generation  
- **Node-Cron** — daily automated article generation  
- **Docker** — containerized backend service

---

### **Database**
- **PostgreSQL** — relational database  
- **Drizzle Kit** — schema generation + migrations  

---

### **Infrastructure & DevOps**
- **Docker** — reproducible multi-service environment  
- **docker-compose** — orchestrating backend, frontend and database  
- **AWS EC2** — compute instance hosting all containers  
- **AWS ECR** — container image registry  
- **AWS CodeBuild** — CI/CD pipeline (build + push backend & frontend images)  
- **Systemd Timer** — automated pull & deployment of updated images  
- **Elastic IP** — static public IP for stable API and frontend access  

---

### **Automation**
- **AI-powered article generator** (HuggingFace free-tier model)  
- **Daily cron job** to create a new article every 24 hours  
- **Automatic deployment** triggered on every push to `main`

## How to Run Locally
The AutoBlog project is split into two independent applications: **frontend** and **backend**.  
Each has its own setup and development workflow.

Please refer to the individual READMEs for full local setup instructions:
- **Frontend Setup:** 
    https://github.com/SirRuanMatos/auto-blog/blob/main/frontend/README.md
- **Backend Setup:**  
    https://github.com/SirRuanMatos/auto-blog/blob/main/backend/README.md