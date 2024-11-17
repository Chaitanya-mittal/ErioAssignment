# Erino Project

## Description

Erino is a web application built with Node.js, Express, TypeScript, Prisma, and React. It provides a robust backend API for managing users and integrates with a frontend built using React, Material-UI (MUI), and Tailwind CSS for styling.

## Major Technical Decisions

- **Node.js and Express**: Chosen for the backend to handle API requests and manage user data.
- **TypeScript**: Used for type safety and better development experience.
- **Prisma**: Selected as the ORM for database interactions due to its type safety and ease of use.
- **React**: Used for building the frontend user interface.
- **Material-UI (MUI)**: Chosen for pre-built UI components.
- **Tailwind CSS**: Used for utility-first CSS styling.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- PostgreSQL (or any other supported database)

### Backend Setup

1. **Clone the repository**:

   ```sh
   git clone https://github.com/yourusername/erino.git
   cd erino
   ```

2. Install dependencies

- npm install

3. Configure the database:

- Create a .env file in the

DATABASE_URL="postgresql://user:password@localhost:5432/erinodb"root directory and add your database connection string:

4. Run database migrations

- npx prisma migrate dev

5. Start the backend server
   -npm run dev

### Frontend Setup

1. Navigate to the frontend directory

- cd client

2. Install dependencies

- npm i

3. Start the server

- npm run dev

### Database Schema Script

Here is an example of the Prisma schema used in this project:

// schema.prisma

```ts
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  first     String
  last      String
  email     String   @unique
  phone     String
  company   String
  jobTitle  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Project Structure

### Backend

- src/index.ts: Entry point of the backend server.
- src/routes/userRoute.ts: Defines the user-related routes.
- src/controllers/user.ts: Contains the logic for handling user-related requests.

### Frontend

- client/src/index.tsx: Entry point of the React application.
- client/src/components/ContactTable.tsx: Component for displaying a table of contacts.
- client/src/styles/index.css: Main CSS file with Tailwind CSS directives.

## How Each Part of the App Works

### Backend

1. UserController: Handles CRUD operations for users. Uses Prisma to interact with the database.
2. userRoute: Defines the API endpoints for user operations and maps them to the corresponding controller methods.

###Frontend

1. ContactTable: Displays a paginated table of contacts. Uses MUI for table components and Tailwind CSS for additional styling.
2. Pagination: Integrated with MUI's Pagination component to handle page changes.
   Running

#### Access the application: Open your browser and navigate to http://localhost:3000 to see the frontend, and http://localhost:3000/api/users for the backend API.
