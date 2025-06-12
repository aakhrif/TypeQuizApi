# --- Base Stage ---
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy application source
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]
