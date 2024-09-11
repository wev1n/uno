# Uno

### A digital rendition of the classic Uno card game, built using **Next.js** for seamless and interactive gameplay. The project aims to replicate the fun and engaging experience of Uno in a browser-based environment while also being responsive and accessible.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Setup & Installation](#setup--installation)
5. [Game Rules & Mechanics](#game-rules--mechanics)
6. [Project Structure](#project-structure)
7. [How to Play](#how-to-play)
8. [Contribution Guidelines](#contribution-guidelines)
9. [License](#license)

---

## Introduction

This project implements the popular card game **Uno** using **Next.js**, providing an interactive, multiplayer experience directly in the browser. The game is designed to be fast, fun, and accessible from any modern web browser, with smooth animations, real-time player interactions, and comprehensive rule enforcement.

If you’re new to Uno, it’s a game where players match cards by color or number in an effort to be the first to get rid of all their cards. It involves strategic moves, special action cards, and lots of fast-paced fun for both players and AI bots!

Feel free to explore and contribute to enhance this project!

---

## Features

- **Multiplayer Support**: Play against your friends in real-time.
- **Singleplayer vs Ai**: Play against AI bots on different levels of difficulty to truly test your skills.
- **Beautiful Animations**: Smooth card transitions and game interactions.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Real-Time Game Logic**: Gameplay rules enforced with real-time updates.
- **Customizable Rules**: Modify game rules such as card draw limits, house rules, etc.
- **Chat System**: In-game chat system to communicate with other players.

_Please add any other features here, if applicable_

---

## Tech Stack

- **Next.js**: For server-side rendering and a React-based frontend.
- **TypeScript** The language off choice for type safety and better code organization using nextjs.
- **Tailwindcss**: For custom styling and responsive design.
- **ShadcnUI**: For a modern and customizable UI library. Shoutout to [Shadcn](https://github.com/shadcn) for this incredible library.
- **Supabase**: Database and authentication for user management and data storage.
- **Socket.io**: Websockets for real-time game updates and multiplayer functionality.
- **Vitest** and **Testing Library-React**: For testing the game logic and components.

---

## Setup & Installation

Follow these steps to get the project running locally.

### Prerequisites

Ensure you have the following tools installed on your machine:

- **Node.js**: v20.x or above.
- **npm**, **pnpm**, **yarn** or **bun**: Package manager (Use whaterver you prefer).

### Installation

1. Clone the repository:

```bash
git clone https://github.com/wev1n/uno.git
```

2. Navigate to the project directory:

```bash
cd uno
```

3. Install dependencies using your preferred package manager:

```bash
npm install
```

4. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

_Please specify any required environment variables or secrets here_

5. Run the development server:

```bash
 npm run dev
```

## Game Rules & Mechanics

The game adheres to standard Uno rules using a 108 card deck, but with some customizable options. Here’s a quick breakdown:

1. **Number of Players**: 2 to 4 players.
2. **Goal**: Be the first to score 500 points(Optional - can be customized) or get rid of all your cards.
3. **Card Types**:
   - **Number Cards**: Simple cards with numbers ranging from 0 to 9.
   - **Action Cards**: Special cards like Reverse, Skip, Draw Two, etc.
   - **Wild Cards**: Wild and Wild Draw Four cards.
4. **Turn Structure**: On each player's turn, they must play a card that matches the top card of the discard pile by either color or number, or play an action card. If you cant play a card, you must draw a card/cards until you can play one.
5. **Winning Condition**: The first player to discard all their cards wins the round, and the score is tallied based on remaining cards in other players' hands.

You can customize the rules by navigating to the **Settings** page in the game interface or simply create a new game with your new customized rules.

---

## Project Structure

This section outlines the major components of the project.

Feel free to dive into each folder for more details. Here is a short description of some key files:

- **`/components/deck.tsx`**: Handles rendering the deck and card interactions.
- **`/app/game-board/page.tsx`**: Main game page where players interact with the game.
- **`/lib/game-logic.ts`**: Core game rules and logic.
- **`/tests/game-logic.test.ts`**: Unit tests for the game logic.

---

## How to Play

1. **Start a Game**: Navigate to the **game page** and either create a new game or join an existing one.
2. **Card Matching**: Match cards by color or number, or play special cards to change the game dynamics.
3. **Special Cards**:
   - **Skip**: Skips the next player’s turn.
   - **Reverse**: Reverses the direction of play.
   - **Draw Two**: Forces the next player to draw two cards.
   - **Wild**: Allows the player to change the current color.
   - **Wild Draw Four**: Allows the player to change the current color and the opponent draws four cards.
4. **Winning**: The game ends when one player plays all of their cards. A point tally is given based on the cards left in other players' hands added together.

For more detailed game rules, see the official Uno documentation or customize rules within the app.

---

## Contribution Guidelines

Contributions are always welcome! Here's how you can contribute:

1. **Fork the repository** and create a new feature branch.
2. **Submit pull requests** for your features, ensuring your code passes any linters or tests.
3. Report bugs or request features via **Issues**.

Make sure to follow the project's coding conventions and add tests for any new features.

### Reporting Issues

- Use the **GitHub Issues** section to report bugs or request new features.
- Include steps to reproduce the issue and any relevant environment information.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more information.
