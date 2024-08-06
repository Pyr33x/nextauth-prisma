# Getting Started

This is a boilerplate template for [Next-Auth@Beta](https://authjs.dev/getting-started/installation?framework=next.js) + [Prisma Adapter](https://authjs.dev/getting-started/adapters/prisma).

## Installation

Clone the repo first using:

```bash
git clone https://github.com/pyr33x/nextauth-prisma.git
```

Install the dependencies using:

```bash
npm install / yarn install / pnpm install
```

> Default pacakge manager is `pnpm`

## Configuration

Follow the steps below to configure the project:

1. Rename `.env.example` to `.env` and fill the required values.
2. After setting up the database, you can run the generate command to create the prisma client.

```bash
pnpm generate
```

3. Run the migration command to create the database tables.

```bash
pnpm migrate
```

## Development

Run the development server:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Serve the production build:

```bash
pnpm start
```

## License

This project is licensed under the MIT License.
