# Exploding Kitten Card Game

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Backend API](#backend-api)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a single-player online card game based on the concept of the Exploding Kitten game. It includes a centralized state management system and dynamic rendering of game components. Players can continue the game from where they left off, thanks to LocalStorage. Additionally, there is a leaderboard to track the top scores.

## Features

- **Home Page:** Describes the game and includes a button to start playing.
- **Game Component:** Dynamically displays the game progress. Includes subcomponents like:
  - `Start Game`: Initializes the game.
  - `Won Game`: Displays when a player wins.
  - `Play Again`: Option to play after losing.
- **Persistent State:** The game state is stored in LocalStorage after every move, allowing the game to be resumed anytime.
- **Optimized Rendering:** Static components are memoized to prevent unnecessary re-rendering.
- **Leaderboard:** Displays top scores with data aggregated from Redis.

## Tech Stack

### Frontend:

- **React.js** with functional components
- **Redux Toolkit** for centralized state management
- **React Router DOM** for navigation between pages
- **LocalStorage** for persistent state
- **Memoization** to reduce unnecessary renders

### Backend:

- **Node.js** and **Express.js**
- **Redis** for the database, using ioredis for client interactions
- **JWT tokens** and **bcrypt** for secure authentication
- **MVC Pattern** for clean and structured code organization
- **Redis Commands** for leaderboard calculations and game state management

## Installation

To run the project locally, follow these steps:

### Prerequisites

- Node.js
- Redis
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd exploding-kitten
   ```
