# Erino Project

## Description

Erino is a web application built with Node.js, Express, TypeScript, Prisma, and React. It provides a robust backend API for managing users and integrates with a frontend built using React, Material-UI (MUI), and Tailwind CSS for styling.

## Major Technical Decisions

- **Node.js and Express**: Chosen for the backend to handle API requests and manage user data.
- **TypeScript**: Used for type safety and better development experience.
- **Prisma**: Selected as the ORM for database interactions due to its type safety , migrations and ease of use.
- **PostgreSQL**: Selected as the underlying database due to pre-defined Schema.
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

```sh
npm install
```

3. Configure the database:

- Create a .env file in the root directory and add your database connection string:

```sh
DATABASE_URL="postgresql://user:password@localhost:5432/erinodb"
```

4. Run database migrations

```sh
npx prisma migrate dev
```

5. Start the backend server

```sh
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory
```sh
cd client
```
2. Install dependencies
```sh
npm i
```
3. Start the server
```sh
npm run dev
```

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
3. Cors to enable frontend to hit the backend url.

###Frontend

1. MUI Components Used
   - Table
   - DropDown
   - Menu
   - Typography
   - FormControl
   - Button
   - and many more
2. React-Hook-Form for handling forms.
3. React-Hot-Toast for displaying appropriate messages to the user for every action.
4. TailwindCss for styling.
5. React-Icons for icons.
   

#### Access the application: Open your browser and navigate to http://localhost:3000 to see the frontend, and http://localhost:3000/api/users for the backend API.


## CHALLENGES:

#### During the assignment, one of the challenges I faced was working with Material-UI (MUI) for the first time and integrating it with Tailwind CSS instead of MUI's default styled-components approach. Limited documentation on using MUI with Tailwind made the process more complex. I resolved this by researching community examples, applying Tailwind classes via the className prop, and wrapping MUI components in custom React components to ensure consistent styling. This approach allowed me to use both libraries harmoniously while maintaining a clean codebase.

####  To resolve this, I looked up common practices on Google, referred to similarities in the provided implementation, and sought guidance from ChatGPT. By combining these resources, I successfully applied Tailwind classes to MUI components and ensured seamless styling integration.
