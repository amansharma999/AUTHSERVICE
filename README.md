# AuthService

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tools and Technologies Used](#2-tools-and-technologies-used)
3. [Endpoints](#3-endpoints)
   - [Signup](#1-signup)
   - [Signin](#2-signin)
   - [Check Authentication](#3-check-authentication)
   - [Check Admin Role](#4-check-admin-role)
4. [Setup Instructions](#4-setup-instructions)
5. [Database Design](#5-database-design)
6. [Acknowledgements](#6-acknowledgements)

## 1. Project Overview

AuthService is a microservice designed to handle user authentication and authorization. It provides endpoints for user signup, signin, and role-based access control. The service is built using Node.js and Express, with Sequelize as the ORM for database interactions.

## 2. Tools and Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **Sequelize**: ORM for SQL databases.
- **MySQL**: Relational database management system.
- **bcrypt**: Library for hashing passwords.
- **jsonwebtoken**: Library for generating and verifying JSON Web Tokens (JWT).
- **dotenv**: Module to load environment variables from a .env file.
- **nodemon**: Utility that monitors for changes in the source code and automatically restarts the server.

## 3. Endpoints

### 1. Signup

- **URL**: `/api/v1/signup`
- **Method**: `POST`
- **Params**:
  - `email` (string, required): User's email.
  - `password`(string, required): User's password.
- **Success Response**:
  - **Code**: `201 Created`
  - **Content**: `{ "message": "User created successfully", "data": { "id": 1, "email": "user@example.com" }, "success": true }`
- **Error Response**:
  - **Code**: `400 Bad Request`
  - **Content**: `{ "message": "Something went wrong", "data": {}, "success": false, "err": "Email or password missing in the request" }`

### 2. Signin

- **URL**: `/api/v1/signin`
- **Method**: `POST`
- **Params**:
  - `email` (string, required): User's email.
  - `password`(string, required): User's password.
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**: `{ "message": "Signin successful", "data": { "token": "jwt_token" }, "success": true }`
- **Error Response**:
  - **Code**: `400 Bad Request`
  - **Content**: `{ "message": "Something went wrong", "data": {}, "success": false, "err": "Email or password missing in the request" }`

### 3. Check Authentication

- **URL**: `/api/v1/isAuthenticated`
- **Method**: `GET`
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**: `{ "message": "User is authenticated", "data": {}, "success": true }`
- **Error Response**:
  - **Code**: `401 Unauthorized`
  - **Content**: `{ "message": "User is not authenticated", "data": {}, "success": false }`

### 4. Check Admin Role

- **URL**: `/api/v1/isAdmin`
- **Method**: `GET`
- **Params**:
  - `id`(integer, required): User's ID.
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**: `{ "message": "User is an admin", "data": {}, "success": true }`
- **Error Response**:
  - **Code**: `400 Bad Request`
  - **Content**: `{ "message": "Something went wrong", "data": {}, "success": false, "err": "User id not given in the request" }`

## 4. Setup Instructions

1. **Clone the repository**:
   ```sh
   git clone https://github.com/amansharma999/Auth_Service.git
   cd authservice
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Set up environment variables**:
   Create a 

.env

 file in the root directory and add the following variables:
   ```env
   PORT=3000
   DB_SYNC=true
   JWT_KEY=your_jwt_secret_key
   ```

4. **Configure the database**:
   Update the database configuration in 

config.json

 with your database credentials.

5. **Run migrations and seeders**:
   ```sh
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```

6. **Start the server**:
   ```sh
   npm start
   ```

## 5. Database Design

The database consists of the following tables:

### Users

| Column    | Type    | Description           |
|-----------|---------|-----------------------|
| id        | INTEGER | Primary key           |
| email     | STRING  | User's email          |
| password  | STRING  | User's hashed password|
| createdAt | DATE    | Record creation date  |
| updatedAt | DATE    | Record update date    |

### Roles

| Column    | Type    | Description                       |
|-----------|---------|-----------------------------------|
| id        | INTEGER | Primary key                       |
| name      | STRING  | Role name (e.g., ADMIN, CUSTOMER) |
| createdAt | DATE    | Record creation date              |
| updatedAt | DATE    | Record update date                |

### UserRoles

| Column    | Type    | Description          |
|-----------|---------|----------------------|
| userId    | INTEGER | Foreign key to Users |
| roleId    | INTEGER | Foreign key to Roles |
| createdAt | DATE    | Record creation date |
| updatedAt | DATE    | Record update date   |


## 6. Acknowledgements

This project was developed as part of the backend course by Sanket Sir. Special thanks to Sanket Sir for his invaluable guidance and support throughout the course.

## 7. Contributing

If you would like to contribute to this project, please follow these steps:

1. **Fork the repository**: Click the "Fork" button at the top right of this page to create a copy of this repository in your GitHub account.

2. **Clone your fork**: Clone your forked repository to your local machine using the following command:

   ```sh
   git clone https://github.com/your-username/Auth_Service.git
   ```

3. **Create a new branch**: Create a new branch for your feature or bugfix:

   ```sh
   git checkout -b feature-or-bugfix-name

   ```

4. **Make your changes**: Make your changes to the codebase.

5. **Commit your changes**: Commit your changes with a descriptive commit message:

   ```sh
   git commit -m "Description of the feature or bugfix"
   ```

6. **Push to your fork**: Push your changes to your forked repository:

   ```sh
   git push origin feature-or-bugfix-name
   ```

7. **Create a Pull Request**: Go to the original repository and create a pull request from your forked repository. Provide a clear description of your changes and why they should be merged.

I will review your pull request and provide feedback. Once approved, your changes will be merged into the main branch.

Thank you for your contributions!