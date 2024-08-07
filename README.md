# Frontend Technical Test

[[English](README.md) | [Portuguese](README.pt.md)]

This is a Next.js 14 project configured with TypeScript, Tailwind CSS, Axios, and Jest.

## Pre requisites

Make sure you have Node.js installed on your machine.

> node: v20.12.2

## Installation

Clone this repository:
```bash
git clone https://github.com/pedrohenrickcs/teste-tecnico-front-end.git
```
### Navigate to the project directory:

```bash
cd teste-tecnico-front-end
```

### Install the dependencies:
```bash
npm install
#ou
yarn install
```

### To start the development server, run the following command:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

The project will be available at http://localhost:3000.

> Note: I left my token available, but if you have problems testing, just replace the GITHUB_TOKEN variable in the project's .env file, with the new token created.

## Available Scripts
### In the project directory, you can run the following scripts:

```bash
> dev: Starts the development server.
> build: Compiles the project for production.
> start: Starts the production server.
> lint: Checks for linting issues.
> test: Runs unit tests.
> test:watch: Runs unit tests in watch mode.
```

## Project Structure
### The project folder structure is as follows:
```bash
├── public               # For storing static files
├── src                  # Project root
├── app/                 # Pages
├── components/          # Reusable components
  ├── common             # Common reusable utilities
  ├── layout             # Interface structure components
├── context/             # For managing and sharing global states
├── enums/               # Stores sets of constant values
├── hooks/               # Encapsulates reusable logic
├── services/            # Centralizes API calls
├── types/               # Stores TypeScript type definitions
├── .gitignore           # Files to be ignored by Git
├── jest.config.js       # Jest configurations
├── next.config.js       # Next.js configurations
├── package.json         # Project manifest file
└── tsconfig.json        # TypeScript configurations
└── tailwind.config      # Tailwind configurations
```
## Technologies Used

```bash
Next.js 14
TypeScript
Tailwind CSS
Axios
Jest
```

## Deployment with Vercel

To test, visit the URL: [teste-tecnico-front-end](https://teste-tecnico-front-end-omega.vercel.app/)

---
⌨️ with ❤️ by [Pedro Henrick](https://www.linkedin.com/in/pedro-henrickcs) 😊