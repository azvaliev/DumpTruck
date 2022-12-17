# Description

## Requirements
- Node JS
- Docker
- pnpm

## Getting Started

Install Dependencies
```bash
pnpm i
```

Populate `.env`
```bash
pnpm db:env
```

### Database

**Requires Docker**

The first time you can run
```bash
pnpm db:build
```
This will build a docker image for MySQL

Start the Docker image using
```bash
pnpm db:start
```

Stop the Docker image using
```bash
pnpm db:stop
```

*Run this one time after you first start the image, and whenver you make prisma schema changes*
Sync the schema using
```bash
pnpm db:sync
```

Enter the MySQL shell using
```bash
pnpm db:shell
```
This command requires MySQL cli

### Dev Server

Start the dev server with
```
pnpm dev
```
