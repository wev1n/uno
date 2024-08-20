# UNO

This is an open source application built using nextjs 14, tailwindcss and shadcn/ui.

> **Warning**
> This app is a work in progress. I'm building this in public and changes are likely to happen. PR's are welcome and i will take a look at them as soon as possible.
> See the roadmap below.

## About this project

This project is mainly for me to learn how to build a production-ready app, in this case using Next.js 14 and TypeScript. Hopefully it will also serve as a fun and functional game to play by yourself or with friends.

## Why?

The whole reason behind building this uno game is for me to learn various things about programming but also to create a fun game that i can make my friends play with me. There also might or might not be a way to cheat the game, guaranteeing an even more fun time for you as the developer, but you didn't hear that from me😉

## Features

- `/app` dir,
- Routing, Layouts, Nested Layouts and Layout Groups
- Data Fetching, Caching and Mutation
- Loading UI
- Route handlers
- Metadata files
- Server and Client Components
- API Routes and Middlewares
- Authentication using **Supabase**
- Database on **Supabase**
- ORM using **Drizzle**
- Styled using **Tailwind CSS** and **Shadcn/UI**
- Written in **TypeScript**
- Testing using **Jest** and **React Testing Library**
- Websockets using **Socket.io**
- Deployed on **Vercel**

## Roadmap

- [] Dark mode
- [] Responsive UI
- [] Singe player mode vs AI
- [] Multiplayer via websockets
- [] Write tests for game logic
- [] Write tests for components
- [] Add flashy animations for wins, new color choice, drawing cards, etc...
- [] Allow users to customize their profiles
- [] Add a possibility to chat to each other if you're playing in the same game

## Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

3. Start the development server:

```sh
pnpm dev
```
