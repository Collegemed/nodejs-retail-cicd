# 1️⃣ Use lightweight Node.js image
FROM node:18-alpine

# 2️⃣ Set working directory
WORKDIR /app

# 3️⃣ Copy package files first (for caching)
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm ci --only=production

# 5️⃣ Copy backend source code
COPY src ./src

# 6️⃣ Copy frontend files
COPY frontend ./frontend

# 7️⃣ Expose backend port
EXPOSE 3000

# 8️⃣ Start the application
CMD ["node", "src/index.js"]
