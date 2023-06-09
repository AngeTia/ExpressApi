# Specify base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app to working directory
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Start the app
CMD ["node", "npm", "start"]
