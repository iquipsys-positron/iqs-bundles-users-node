FROM pipdevs/node:8.4.0

# Install git and ssh
RUN apk update && apk add git && apk add openssh

# Copy local ssh keys
COPY docker/id_rsa /root/.ssh/

# Setup ssh access to github repositories
RUN chmod 600 /root/.ssh/id_rsa* \
    && ssh-keyscan github.com >> ~/.ssh/known_hosts \
    && ssh-keyscan gitlab.com >> ~/.ssh/known_hosts 

# Set working directory
WORKDIR /app

# Copy project file
COPY package.json .

# Install ALL node_modules, including 'devDependencies'
RUN npm install

# Copy entire project
COPY . .

# set default environment variables
ENV MONGO_SERVICE_URI mongo:27017/app
ENV ENV_NAME=debug
ENV AWS_REGION=us-east-1
ENV AWS_ACCESS_ID=
ENV AWS_ACCESS_KEY=

EXPOSE 8080

ENTRYPOINT [ "node", "./bin/run.js" ]