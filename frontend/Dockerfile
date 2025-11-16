# /my-project/frontend/Dockerfile

# 1. Базовый образ (стабильный)
FROM node:24-alpine
WORKDIR /app

# 2. Копируем package.json (для кэширования)
COPY package*.json ./

# 3. Устанавливаем зависимости
RUN npm install

# 4. Копируем остальной код
COPY . .

# 5. Открываем порт
EXPOSE 5173

# 6. Команда запуска (используем host, чтобы было видно снаружи)
CMD ["npm", "run", "dev", "--", "--host"]