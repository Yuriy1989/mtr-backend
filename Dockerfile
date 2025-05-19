FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build
# Очистка временных файлов и зависимостей, если они не нужны для следующего этапа
RUN rm -rf ./src ./node_modules

FROM node:18-alpine AS backend
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev --no-audit --no-fund && npm i -g pm2
COPY --from=builder /app/dist ./dist
COPY ./ecosystem.config.js ./

CMD [ "pm2-runtime", "ecosystem.config.js" ]
