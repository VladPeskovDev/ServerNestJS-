
FROM node:20-alpine AS builder

WORKDIR /app


COPY package*.json ./


RUN npm install

# Копируем остальные файлы проекта
COPY . .


RUN npm run build


FROM node:20-alpine

WORKDIR /app

COPY package*.json ./


RUN npm ci --only=production


COPY --from=builder /app/dist ./dist


ENV NODE_ENV=production


EXPOSE 3000


CMD ["node", "dist/main.js"]