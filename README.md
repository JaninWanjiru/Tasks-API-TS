# Tasks API with Express and Typescript

Here is a simple RESTful API for managing tasks. It has been built with **TypeScript**, **Express.js**, **Prisma**, and **PostgreSQL**. Perfect for learning how modern TypeScript backends work.

## Features

- Create a new task
- View all tasks
- View a specific task by ID
- Update a task
- Delete a task

## Tech Stack Used

- **Backend Framework**: Express.js
- **Language**: TypeScript
- **ORM**: Prisma
- **Database**: PostgreSQL


## How to install and setup

### 1. Clone the repo
```bash
git clone https://github.com/JaninWanjiru/Tasks-API-TS.git
```

### 2. Install dependancies
```bash
npm init -y
npm i express
npm i typescript -D
npx tsc --init
npm i -D @types/express
npx prisma init --init datasource-provider postgresql
```
### 3. Create your model in prisma/schema.prisma file


### 4. Run database migrations
```bash
npx prisma migrate dev --name init
```

### 5. Start the server
```bash
npm run dev
```

## API Endpoints

1. GET `/` - welcome route.

2. GET `/tasks` - fetches all tasks.

3. GET `/tasks/:id` - fetches a task using the given Id.

4. POST `/tasks` - creates a new task.

5. PATCH `/tasks/:id` - updates a task given its Id.

6. DELETE `/tasks/:id` - deletes a task given its Id.

### N/B: 
- You must have PostgreSQL installed and running.

