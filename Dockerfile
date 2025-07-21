# Use Node.js 22 base image
FROM node:22

# Set working directory
WORKDIR /app

# Copy only package files first to cache dependencies
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build the Next.js project (will generate .next/)
RUN npm run build

# Set environment variable and expose port
ENV PORT=3000
EXPOSE 3000

# Start the production build
CMD ["npm", "start"]
