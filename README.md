# MTR Backend – NestJS API для управления МТР и транспортными заявками

Серверная часть проекта **MTR**, написанная на [NestJS](https://nestjs.com/) с использованием [TypeORM](https://typeorm.io/) и базы данных **PostgreSQL**.  
Предоставляет REST API для работы с МТР, приложениями, служебными записками, транспортными заявками и аналитикой.

---

## 🚀 Возможности
- Авторизация и аутентификация (JWT)
- Управление пользователями и ролями
- Работа с приложениями и служебными записками
- Модуль транспорта (создание и обработка заявок)
- Последняя миля (приемка и реестр)
- Журнал аудита действий
- Интеграция со справочниками (склады, филиалы, регионы и др.)
- Отчёты и статистика

---

## 🛠️ Технологии
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- JWT (Json Web Token)
- Docker + PM2 (для деплоя)

---

## 📦 Установка и запуск

### 1. Клонирование репозитория
```bash
git clone https://github.com/Yuriy1989/mtr-backend.git
cd mtr-backend
```
- Создать файл .env в корне проекта и заполнять как в примере .env.example 

## Обязательно для работы по https

- Сгенерировать самоподписывающийся сертификат или использовать сертификаты центра сертификации (сертификаты должны быть такие же как я для frontend).
- Создать папку в корне проекта certs, положить туда сертификат и ключ.

```

### 2. Установка зависимостей
```bash
npm install
```

### 3. Настройка `.env`
Создайте файл `.env` в корне проекта и укажите параметры:
```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=your_password
DATABASE_NAME=mtr
JWT_SECRET=super_secret_key
PORT=3000
```

### 4. Запуск в dev-режиме
```bash
npm run start:dev
```

### 5. Сборка и запуск в prod-режиме
```bash
npm run build
npm run start:prod
```

---

## 🐳 Запуск через Docker
```bash
docker build -t mtr-backend .
docker run -d -p 3000:3000 --name mtr-backend mtr-backend
```

---

## 📖 Скрипты
- `npm run start` – запуск в обычном режиме
- `npm run start:dev` – запуск в dev-режиме (watch mode)
- `npm run build` – сборка проекта
- `npm run start:prod` – запуск в продакшене
- `npm run lint` – проверка кода eslint
- `npm run test` – запуск тестов

---

## 📊 Структура проекта
```
src/
 ┣ modules/         # Основные модули (applications, transports, journal и т.п.)
 ┣ entities/        # TypeORM сущности
 ┣ common/          # Общие утилиты и фильтры
 ┣ main.ts          # Точка входа
 ┗ app.module.ts    # Корневой модуль
```
---

## 📝 Лицензия
Проект распространяется под свободной лицензией.
