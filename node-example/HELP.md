
# 📦 Node.js Docker Example

This project demonstrates **two Docker approaches** for running a Node.js application:

1. **Single-stage Docker build** (basic & simple)
2. **Multi-stage Docker build** (optimized & production-ready)

The goal is to show **why multi-stage builds are recommended** for real applications.

---

## 🧱 Project Structure

```
node-example/
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile       # Multi-stage Dockerfile
├── Dockerfile-old   # Single-stage Dockerfile
└── .dockerignore
```

---

## 🚀 Prerequisites

* Docker installed
* Node.js (optional, for local runs)

---

## 📦 Application Overview

* Simple **Node.js + Express** application
* Runs on **port 3000**
* Exposes a single REST endpoint

---

# 🐳 Dockerfiles Explained

---

## 🟢 1️⃣ Single-Stage Dockerfile (Basic)

📄 **File:** `Dockerfile-old`

### Purpose

* Easiest way to Dockerize a Node.js app
* All build and runtime steps in one image
* Good for learning and quick testing

### Example

```dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
```

### Characteristics

* Larger image size
* Contains build tools and dev dependencies
* Simple and readable

---

### ▶ Build & Run (Single-Stage)

```bash
docker build -t node-single .
docker run -p 3000:3000 node-single
```

---

## 🔵 2️⃣ Multi-Stage Dockerfile (Optimized)

📄 **File:** `Dockerfile.multistage`

### Purpose

* Separate **build** and **runtime**
* Smaller final image
* Best practice for production

---

### Stage 1 — Build Stage

```dockerfile
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
```

---

### Stage 2 — Runtime Stage

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000
CMD ["node", "app.js"]
```

---

### Why Multi-Stage?

✔ Removes unnecessary build tools
✔ Smaller image size
✔ Faster startup
✔ More secure

---

### ▶ Build & Run (Multi-Stage)

```bash
docker build -f Dockerfile.multistage -t node-multistage .
docker run -p 3000:3000 node-multistage
```

---

## 🔍 Comparison

| Feature              | Single-Stage | Multi-Stage |
| -------------------- | ------------ | ----------- |
| Image Size           | Large        | Smaller     |
| Build Tools Included | Yes          | No          |
| Production Ready     | ❌            | ✅           |
| Best Practice        | ❌            | ✅           |

---

## 📄 index.js Example

```js
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Dockerized Node.js!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

## 📁 .dockerignore (Important)

```
node_modules
npm-debug.log
```

---

## 🧠 Useful Docker Commands

```bash
docker images
docker ps
docker logs <container_id>
docker stop <container_id>
docker rm <container_id>
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a branch
3. Commit changes
4. Open a Pull Request

---

## 📬 Contact

Maintained by **Dinesh Veer**
GitHub: [https://github.com/dinesh-veer](https://github.com/dinesh-veer)

---

## ⭐ Support

If this project helped you:

* ⭐ Star the repository
* 🍴 Fork it
* 📢 Share it

---

