# Todo CRUD API

A simple RESTful API for managing todos built with Node.js, Express.js, TypeScript, and MongoDB. The API supports creating, retrieving, updating, and deleting todos with input validation and error handling.

## Features

* Create todos
* Get all todos
* Get a single todo by ID
* Update todos
* Delete todos
* Mark todos as completed/incomplete
* Input validation
* Error handling
* MongoDB persistence
* TypeScript type safety
* Automatic timestamps for todos

## Tech Stack

* **Backend:** Node.js, Express.js, TypeScript
* **Database:** MongoDB with Mongoose
* **Environment Variables:** dotenv
* **CORS:** cors
* **Development:** tsx

## Project Structure

```text
src/
├── config/
│   └── database.ts
├── controllers/
│   └── todo.controller.ts
├── models/
│   └── todo.model.ts
├── routes/
│   └── todo.routes.ts
├── services/
│   └── todo.service.ts
├── types/
│   └── todo.types.ts
├── app.ts
└── server.ts
```

The application follows a simple layered architecture:

```text
Request
   ↓
Routes
   ↓
Controllers
   ↓
Services
   ↓
Models
   ↓
MongoDB
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/codequeen-11/todo-api.git
cd todo-api
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

4. Start the development server:

```bash
npm run dev
```

The API will run at:

```text
http://localhost:5000
```

## Environment Variables

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

The `.env` file should not be committed to the repository.

## Available Scripts

| Command         | Description                                        |
| --------------- | -------------------------------------------------- |
| `npm run dev`   | Run the server in development mode with hot reload |
| `npm run build` | Compile TypeScript files to JavaScript             |
| `npm start`     | Run the compiled server                            |

## API Endpoints

### Health Check

| Method | Endpoint      | Description                 |
| ------ | ------------- | --------------------------- |
| GET    | `/api/health` | Check if the API is running |

### Todo Management

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | `/api/todos`     | Create a new todo |
| GET    | `/api/todos`     | Get all todos     |
| GET    | `/api/todos/:id` | Get a todo by ID  |
| PUT    | `/api/todos/:id` | Update a todo     |
| DELETE | `/api/todos/:id` | Delete a todo     |

## Request Examples

### Create Todo

```http
POST /api/todos
Content-Type: application/json
```

```json
{
  "title": "Learn TypeScript"
}
```

### Update Todo

```http
PUT /api/todos/:id
Content-Type: application/json
```

```json
{
  "title": "Complete CRUD API",
  "completed": true
}
```

## Todo Model

Each todo contains:

```json
{
  "_id": "MongoDB ObjectId",
  "title": "Learn TypeScript",
  "completed": false,
  "createdAt": "2026-09-28T00:00:00.000Z",
  "updatedAt": "2026-09-28T00:00:00.000Z"
}
```

* `title` — Required string between 1 and 200 characters
* `completed` — Boolean, defaults to `false`
* `createdAt` — Automatically generated timestamp
* `updatedAt` — Automatically updated timestamp

## Validation & Error Handling

The API validates incoming requests and returns appropriate HTTP status codes.

* `200` — Successful request
* `201` — Resource created successfully
* `400` — Invalid request or input
* `404` — Todo not found
* `500` — Server error

Examples of validated cases include:

* Empty todo title
* Empty update request
* Invalid `completed` value
* Non-existent todo ID

## Testing

The API was tested using an API testing client.

Tested operations include:

* Health check
* Create todo
* Get all todos
* Get todo by ID
* Update todo
* Mark todo as completed
* Delete todo
* Invalid input handling
* Not-found handling

## License

This project is created for learning and development purposes.
