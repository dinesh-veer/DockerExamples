
# 📦 Vite React App — Docker Example

This is a **Vite-powered React application** containerized with Docker for development and production workflows.

This project demonstrates:
- How to build a Vite React app inside a Docker container
- How to serve the app in both development and production modes
- Minimal and practical Docker usage for frontend apps

---

## 🧱 Project Structure

```

vite-project/
├── public/
├── src/
├── Dockerfile
├── .dockerignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

````

---

## 🚀 Prerequisites

Before you begin, make sure you have:

✔ Docker installed  
✔ (Optional) Node.js and npm for local dev

---

## 📦 Application Overview

- Built with **React** and **Vite**
- Runs on default port **5173**
- Fast live reload during local development
- Optimized build output for production

---

## 🐳 Docker Usage

This project includes a `Dockerfile` for building and running the app.

---

### 🔹 Step 1 — Build Docker Image

From the `vite-project` directory:

```bash
docker build -t vite-react-app .
````

This creates a Docker image named `vite-react-app`.

---

### 🔹 Step 2 — Run Container

```bash
docker run -p 5173:5173 vite-react-app
```

Access the app in your browser at:

```
http://localhost:5173
```

---

## 📄 Example Dockerfile (Explained)

Here’s a sample Dockerfile for this project:

```dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
```

### How it works

* Uses official **Node 18** image
* Installs dependencies inside container
* Copies source files
* Exposes Vite default dev port (5173)
* Runs development server with HMR enabled

---

## 📁 .dockerignore

To optimize build context, this file ensures unnecessary files are excluded:

```
node_modules
dist
npm-debug.log
```

---

## 🧠 Local Development (Optional)

If you want to run locally without Docker:

```bash
npm install
npm run dev
```

Access:

```
http://localhost:5173
```

---

## 🧪 How Vite Works

* Vite starts a lightweight dev server
* Uses ES modules for fast reloads
* Source files are pre-served during dev
* Production build is optimized with Rollup

---

## ⭐ Sample Improvements

Here are enhancements you can add to this project:

### 📌 Production Build with Nginx

Use a multi-stage Dockerfile to build and serve optimized production files:

```dockerfile
# Build stage
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
```

---

### 📌 Add Environment Variables

Use `.env` and `.env.production` to manage API endpoints and configs.

---

### 📌 Add Tests

Include testing frameworks such as:

* Jest
* React Testing Library

---

## 🤝 Contribution Guidelines

Contributions are welcome! Here’s how you can help:

1. **Fork the repository**
2. Create a feature branch

   ```bash
   git checkout -b feature/my-update
   ```
3. Make your changes
4. Commit your work

   ```bash
   git commit -m "feat: describe your change"
   ```
5. Push to your fork
6. Open a **Pull Request**

---

## 📬 Contact & Support

Maintained by **Dinesh Veer**
GitHub: [https://github.com/dinesh-veer](https://github.com/dinesh-veer)

If you have questions or feature requests:
✔ Create an issue
✔ Submit fixes via PR

---

## 🌟 Support

If this project helped you:\
⭐ Star the repository\
🍴 Fork it\
📢 Share it with others!

---

## 🚀 Next Steps (Optional)

Here are some ideas to extend this setup:

* Add a **backend API** and connect from the React app
* Add **Docker compose** for full stack setup
* Add **CI/CD pipeline**
* Deploy to **AWS / GCP / Azure**
* Add **prettier / eslint**

---

Happy coding! 🧠🔥
