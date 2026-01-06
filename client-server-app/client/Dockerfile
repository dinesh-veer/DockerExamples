#Production build stage
FROM node:22-alpine AS prodbuild

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

#Run stage
FROM node:22-alpine

WORKDIR /app

RUN npm i -g serve

COPY --from=prodbuild /app/dist ./dist

EXPOSE 3000


CMD ["serve", "-s", "dist", "-l", "3000"]

