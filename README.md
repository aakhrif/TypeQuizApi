
# Quiz API Server

This project is a simple Express API server built with TypeScript. It includes a modular CORS configuration supporting different environments (dev, staging, prod).

## Features

- TypeScript + Node.js + Express setup
- Environment-based CORS origin control
- Modular and reusable config structure
- Uses dotenv for environment variables
- Ready for extension with quiz question endpoints

## Getting Started

### Prerequisites

- Node.js v18+ recommended  
- npm or yarn

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file at the root:

```
PORT=3000
ENVIRONMENT=DEV
```

- `PORT`: port the server listens on (default 3000)  
- `ENVIRONMENT`: one of `DEV`, `STAGING`, `PROD`

### Running the Server

```bash
npm start
```

### CORS Setup

- In **DEV**, all origins allowed (`*`)  
- In **STAGING**, only `staging.example.com` allowed  
- In **PROD**, only `example.com` allowed  

CORS logic is defined in `src/config/corsConfig.ts` and environment constants in `src/constants/Constants.ts`.
