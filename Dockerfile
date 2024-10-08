# Use the official Node.js image as a base
FROM node:20.18.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install npm dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Command to run the application (if needed, adjust as necessary)
CMD ["npm", "start"]
