
# 📡 Client-Server Application (React + Node) — Docker Example

This project demonstrates a **Dockerized client-server architecture** where:

* 🖥 **Client** → React application built using **Vite**
* 🌐 **Server** → Node.js backend API
* 🐳 **Docker & Docker Compose** run both services together

---

## 🧠 Internal Working

* Browser accesses **React UI** on `localhost:5173`
* React app calls backend using:

  ```
  http://server:3000
  ```
* Docker resolves `server` → backend container
* Backend responds with JSON data

---

## 🔐 CORS Configuration (Important)

Since the **frontend and backend run on different ports**, **CORS must be enabled on the Node.js server**.

### 🔹 When is CORS Required?

| Scenario                   | CORS Needed |
| -------------------------- | ----------- |
| React (5173) → Node (3000) | ✅ Yes       |
| Same origin (prod + proxy) | ❌ No        |

---

### ✅ Option 1 — Enable CORS Using Middleware (Recommended)

Install CORS:

```bash
npm install cors
```

In `server/app.js`:

```js
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // allow all origins (dev)
```

✔ Works instantly
✔ Best for development

---

### 🔒 Option 2 — Restrict CORS (Production-ready)

```js
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"]
}));
```

---

### 🚫 Option 3 — No CORS (Using Proxy or Nginx)

If:

* React is built and served by the backend
* Or requests go through Nginx

👉 CORS is **not required**

---

## ⚠ Common CORS Error

```
Access to fetch at 'http://server:3000' from origin 'http://localhost:5173'
has been blocked by CORS policy
```

✔ Solution: Enable CORS or proxy requests

---

## 🧱 Project Structure

```
client-server-app/
├── server/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
├── client/
│   ├── src/
│   ├── vite.config.js
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## 🚀 Setup & Run

```bash
docker compose up --build
```

Access:

* React UI → [http://localhost:5173](http://localhost:5173)
* Node API → [http://localhost:3000](http://localhost:3000)

---

## 🐳 Dockerfiles Explained

### Server Dockerfile

```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

---

### Client Dockerfile (React + Vite)

```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]
```

---

## ⚠ Vite Configuration Note

Ensure Vite allows external access:

```js
export default {
  server: {
    host: true,
    port: 5173
  }
};
```

---

## 🤝 Contribution Guidelines

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Open a Pull Request

---

## 📬 Contact & Support

Maintained by **Dinesh Veer**
GitHub: [https://github.com/dinesh-veer](https://github.com/dinesh-veer)

Open issues for bugs or feature requests.

---

## ⭐ Support

If this repo helped you:
⭐ Star it
🍴 Fork it
📢 Share it

---

## 🚀 Next Improvements

* React production build (Nginx)
* Multi-stage Dockerfiles
* Environment-based configs
* Observability (Prometheus / Grafana)

---

