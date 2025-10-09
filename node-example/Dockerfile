#built multistage docker file with two stages
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


#Create stage 2 to use first stage

FROM node:22-alpine

WORKDIR /myapp

COPY --from=builder /app /myapp

EXPOSE 3000

CMD ["node", "index.js"]