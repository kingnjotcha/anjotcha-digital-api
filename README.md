# Anjotcha Digital Innovations API

A RESTful Node.js/Express API for managing services, promotions, news, and previous projects for Anjotcha Digital Innovations.  
Built with PostgreSQL, Sequelize ORM, JWT authentication, and documented using Swagger (OpenAPI).

---

## Table of Contents

- [Anjotcha Digital Innovations API](#anjotcha-digital-innovations-api)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Setup \& Installation](#setup--installation)
  - [Project Structure](#project-structure)
  - [API Endpoints](#api-endpoints)
    - [Services](#services)
    - [Promotions](#promotions)
    - [News](#news)
    - [Projects](#projects)
  - [Swagger Documentation](#swagger-documentation)
  - [Development Scripts](#development-scripts)
  - [Notes](#notes)

---

## Features

- CRUD operations for:
  - **Services** (company offerings)
  - **Promotions** (marketing campaigns)
  - **News** (company news/articles)
  - **Projects** (previous client projects)
- PostgreSQL database with Sequelize ORM
- JWT authentication ready (for future use)
- Swagger (OpenAPI) documentation
- Modular structure for easy extension

---

## Tech Stack

- **Node.js** / **Express**
- **PostgreSQL** (via Sequelize)
- **Swagger** (swagger-ui-express, swagger-jsdoc)
- **JWT** (jsonwebtoken)
- **Axios**, **bcryptjs**, **dotenv**, **morgan**, **cors**

---

## Setup & Installation

1. **Clone the repository**
   ```sh
   git clone <repo-url>
   cd anjotcha-api
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure environment variables**  
   Create a `.env` file in the root directory:
   ```
   PORT=7000
   DB_NAME=your_db_name
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_HOST=localhost
   DB_PORT=5432
   DIALECT=postgres
   JWT_SECRET=your_jwt_secret
   ```

4. **Run database migrations (tables auto-created by Sequelize)**
   - Tables are created automatically on server start via `sequelize.sync()`.

5. **Start the server**
   ```sh
   npm run dev
   ```
   or
   ```sh
   npm start
   ```

---

## Project Structure

```
src/
  controllers/
    newsController.js
    promotionsController.js
    projectController.js
    servicesController.js
  dbconfig/
    dbconn.js
  models/
    newsModel.js
    promotionsModel.js
    projectModel.js
    servicesModel.js
  routes/
    newsRoutes.js
    promotionsRoutes.js
    projectRoutes.js
    servicesRoutes.js
  utils/
    swagger.js
  app.js
.env
package.json
```

---

## API Endpoints

All endpoints are prefixed with `/api` or `/api/v1` depending on your configuration.

### Services

| Method | Endpoint           | Description                |
|--------|--------------------|----------------------------|
| GET    | `/services`        | List all services          |
| POST   | `/services`        | Create a new service       |
| GET    | `/services/:id`    | Get a service by ID        |
| PUT    | `/services/:id`    | Update a service by ID     |
| DELETE | `/services/:id`    | Delete a service by ID     |

### Promotions

| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| GET    | `/promotions`        | List all promotions          |
| POST   | `/promotions`        | Create a new promotion       |
| GET    | `/promotions/:id`    | Get a promotion by ID        |
| PUT    | `/promotions/:id`    | Update a promotion by ID     |
| DELETE | `/promotions/:id`    | Delete a promotion by ID     |

### News

| Method | Endpoint         | Description                |
|--------|------------------|----------------------------|
| GET    | `/news`          | List all news articles     |
| POST   | `/news`          | Create a news article      |
| GET    | `/news/:id`      | Get a news article by ID   |
| PUT    | `/news/:id`      | Update a news article      |
| DELETE | `/news/:id`      | Delete a news article      |

### Projects

| Method | Endpoint         | Description                |
|--------|------------------|----------------------------|
| GET    | `/projects`      | List all projects          |
| POST   | `/projects`      | Create a new project       |
| GET    | `/projects/:id`  | Get a project by ID        |
| PUT    | `/projects/:id`  | Update a project by ID     |
| DELETE | `/projects/:id`  | Delete a project by ID     |

---

## Swagger Documentation

Interactive API docs available at:  
[http://localhost:7000/api-docs](http://localhost:7000/api-docs)

- All endpoints are documented with request/response schemas.
- Try out endpoints directly from the Swagger UI.

---

## Development Scripts

- `npm run dev` — Start server with nodemon (auto-reload)
- `npm start` — Start server normally

---

## Notes

- All models use auto-incrementing integer IDs.
- Dates (e.g., `valid`, `published`, `started`, `completed`) must be valid date strings (e.g., `"2025-09-01"`).
- `technologies` in projects is a comma-separated string (e.g., `"Node.js, React, PostgreSQL"`).
- JWT authentication is set up for future use; endpoints are currently public.
- For production, secure your `.env` and use strong secrets/passwords.

---

**For questions or contributions, contact Anjotcha Digital Innovations.**