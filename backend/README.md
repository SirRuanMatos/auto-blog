# AutoBlog Backend API

A backend service built with **Node.js**, **Express**, **PostgreSQL**, and **Drizzle ORM**, designed to automatically generate SEO-optimized blog articles and associated images.  
This API integrates with **DeepSeek** through HuggingFace Inference API for article generation, and uses **Z-Image-Turbo** to generate high-quality images, which are stored in **Base64** format to reduce infrastructure costs.

## Features

-   **Automatic blog article generation** using DeepSeek (via HuggingFace Inference API)
-   **High-quality AI image generation** using Z-Image-Turbo
-   **Base64 image storage** to avoid cloud bucket costs
-   **PostgreSQL database** with Drizzle ORM for schema safety and migrations
-   **Clean Express architecture** with modular routing
-   **Fully typed TypeScript-ready structure (if applicable)**
-   **Optimized for automation pipelines**

## Tech Stack

| Layer                     | Technology                                  |
| ------------------------- | ------------------------------------------- |
| **Backend Runtime**       | Node.js + Express                           |
| **Database**              | PostgreSQL                                  |
| **ORM**                   | Drizzle ORM                                 |
| **AI Article Generation** | DeepSeek via HuggingFace Inference API      |
| **Image Generation**      | Z-Image-Turbo via HuggingFace Inference API |
| **Image Storage**         | Base64 directly in DB                       |

## Installation

Install my project

```bash
    git clone https://github.com/SirRuanMatos/auto-blog.git
    cd auto-blog
    cd backend
    npm install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL` - Connection string for your PostgreSQL database (used by Drizzle ORM). Example: postgres://user:password@localhost:5432/database

`HF_TOKEN` - HuggingFace API token for DeepSeek article generation.

`AUTH_PASSWORD` - Username for Basic Auth–protected routes.

`AUTH_USERNAME` - Password for Basic Auth–protected routes.

```bash
DATABASE_URL="postgres://user:password@localhost:5432/autoblog"
HF_TOKEN="your_huggingface_api_key"
AUTH_PASSWORD="your_super_password"
AUTH_USERNAME="your_username"
```

## Compose yout DB (Postgres)

To start the PostgreSQL database using Docker Compose, run the command below at the project root:

```bash
docker compose up -d
```

This will:

-   Create and start the PostgreSQL container in the background (-d)

-   Expose the database on the port defined in docker-compose.yml

-   Allow the API to connect using the DATABASE_URL value from your .env file

-   After the container starts, the API will be able to connect to the database normally using Drizzle ORM.

## Run Drizzle Migrations

After starting the PostgreSQL database and configuring your .env file, run the Drizzle migrations to create the tables in your database:

```bash
npm run migrate
```

What these command do

-   npm run migrate → applies the generated migrations to your database.
    `✅ Only run these commands after the database is running via docker compose up -d.`

## Start the Application (Development)

To start the application in development mode, run:

```bash
npm run dev
```

This will:

-   Start the server with hot reload
-   Watch your files for changes
    `Ensure your database is running before starting the application.`

## Start the Application (Production)

To build and run the application in production mode, use:

```bash
npm run build
npm run start
```

What these commands do:

-   npm run build → compiles and optimizes the project for production
-   npm run start → runs the compiled application
    `In production mode, npm does not reload automatically — it's optimized for performance and stability.`

## Endpoints

| Method | Path                                   | Description                                                                   |
| ------ | -------------------------------------- | ----------------------------------------------------------------------------- |
| GET    | [/health](#health)                     | Checks if the application is running and accessible.                          |
| GET    | [/articles](#articles)                 | Returns a list of all generated articles.                                     |
| GET    | [/articles/:id](#articlesid)           | Returns detailed information for a specific article by its ID.                |
| POST   | [/generate-article](#generate-article) | Forces the creation of a new article (including AI-generated text and image). |

### /health

Checks if the application is running and accessible.

```bash
curl --location 'http://127.0.0.1:3000/autoblog/v1/health'
```

### /articles

Returns a list of all generated articles.

```bash
curl --location 'http://127.0.0.1:3000/autoblog/v1/articles'
```

### /articles/:id

Returns detailed information for a specific article by its ID.

```bash
curl --location 'http://127.0.0.1:3000/autoblog/v1/articles/:id'
```

### /generate-article

Forces the creation of a new article, including AI-generated text and image.
This route is protected with Basic Auth, requiring `AUTH_USERNAME` and `AUTH_PASSWORD`.

```bash
curl --location --request POST 'http://127.0.0.1:3000/autoblog/v1/generate-article' \
--header 'Authorization: Basic {yourBase64EncodedCredentials}'
```
