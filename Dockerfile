FROM node:16-alpine3.14

# Install Git
RUN apk add --no-cache git

# Create app directory
WORKDIR /usr/src/app

# Copy app directory
RUN git clone https://github.com/gabrielfbello/ezops-test-gabrielbello.git

# Changing app directory
WORKDIR /usr/src/app/ezops-test-gabrielbello

# Install app dependencies
RUN npm install --legacy-peer-deps

# Run Build      
RUN npm run build

EXPOSE 3000

# Bundle app source
CMD ["node", "dist/main.js"]
