

# 📦 FullStackDocker

This folder contains a **full-stack application with Docker support** — demonstrating how to containerize and run a multi-tier application including frontend, backend, database, and reverse proxy using Docker & Docker Compose.

---

## 🧩 Project Structure

```

FullStackDocker/
├── backend/
├── frontend/
├── docker-compose.yml
├── README.md


````

## 🧠 Overview

This project shows a complete **containerized full-stack application** that includes:

| Component | Language / Tech | Purpose |
|-----------|------------------|---------|
| `frontend` | React / Node | UI client |
| `backend`  | Express / Flask / Spring Boot | API server |
| `nginx`    | NGINX | Reverse proxy / static host |
| `database` | MySQL / PostgreSQL / Mongo | Persistent storage |
| `docker-compose.yml` | Compose config | Orchestrates all containers |

This setup mimics production architecture using Docker.

---

## 🚀 How It Works

1. **Frontend** builds a UI bundle and exposes HTTP port (e.g., 3000)  
2. **Backend** exposes REST API (e.g., 8080)  
3. **Nginx** serves frontend and routes `/api` to backend  
4. **Database** runs inside a container and stores data  

All services are defined in a **single Docker Compose file** and communicate via the Docker network.

---

## 🛠 Prerequisites

✔ Docker installed  
✔ Docker Compose installed  
✔ Working Git repository

---

## 📦 Running the App

### 1. Clone and navigate:

```bash
git clone https://github.com/dinesh-veer/DockerExamples
cd DockerExamples/FullStackDocker
````

### 2. Create `.env` (if needed)

Copy or rename `.env.example`:

```bash
cp .env.example .env
```

Update DB credentials / ports.

---

### 3. Build and start containers

```bash
docker compose up --build
```

This command:

✔ Builds images
✔ Starts network
✔ Launches services
✔ Connects containers

---

### 4. Verify running

Frontend UI:

```
http://localhost:3000
```

Backend API:

```
http://localhost:8080/api
```

Database UI (if applicable):

```
http://localhost:5432 (Postgres)
```

Nginx:

```
http://localhost
```

---

## 📌 Components Explained

### 🧑‍💻 Frontend

* Built with React 
* Served via Nginx in production
* Communicates with backend via REST

---

### ⚙️ Backend

* Handles API requests
* Connects to DB
* Built as a service image in Docker

Example:

```
docker build -t fullstack-backend ./backend
```

---

### 🧱 Database

Depending on your setup, this might be:

✔ MySQL
✔ PostgreSQL
✔ MongoDB

Configured via `docker-compose.yml` with persistent volumes.

---

### 📡 NGINX

* Acts as reverse proxy
* Routes frontend and backend traffic
* Improves performance and security

Example snippet:

```
location /api {
    proxy_pass http://backend:8080;
}
```

---

## 🧪 Useful CLI Commands

Stop running containers:

```bash
docker compose down
```

Rebuild containers after change:

```bash
docker compose up --build
```

View logs:

```bash
docker compose logs -f
```

Remove unused images:

```bash
docker system prune -f
```

---

## 🧠 Best Practices Demonstrated

✔ Multi-container orchestrations
✔ Environment variable usage
✔ Reverse proxy integration
✔ Persistent storage for DB
✔ Compose networking
✔ Image optimization

---

## 🏁 Conclusion

This setup provides a **realistic Dockerized full-stack template**.
You can extend it to include:

✨ Load balancer
✨ CI/CD pipelines
✨ Observability (Prometheus / Grafana)
✨ Kubernetes manifests

---

## 📄 License

MIT License

```

---

```
