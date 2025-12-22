# Family Trivia

A React application using TypeScript for a family-friendly team trivia game. Built with Vite for fast development and optimized builds.

## Features

- 🎯 Interactive trivia game board with 6 categories and 5 questions each
- 👥 Support for multiple teams (up to 3 by default)
- 💯 Automatic score tracking with points added for correct answers and deducted for incorrect ones
- 🎨 Modern trivia-themed UI with blue and gold colors
- 📱 Responsive design that works on desktop and mobile devices
- 🔄 Reset game functionality to start over

## Game Categories

The game includes questions from 6 different categories:
- Science
- History
- Geography
- Movies
- Sports
- Literature

Each category has 5 questions worth 200, 400, 600, 800, and 1000 points.

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173).

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## How to Play

1. **Setup**: Enter the names of the teams (up to 3 teams)
2. **Start Game**: Click "Start Game" to begin
3. **Select Question**: Click on any point value on the board
4. **Answer**: Read the question, then click "Show Answer" to reveal the answer
5. **Score**: Mark whether the current team answered correctly or incorrectly
6. **Continue**: The next team's turn begins automatically
7. **Reset**: Click "Reset Game" at any time to start over

## Technology Stack

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients and animations
- **ESLint** - Code linting

## Project Structure

```
src/
├── components/          # React components
│   ├── GameBoard.tsx   # Main game board grid
│   ├── QuestionModal.tsx # Question display modal
│   └── ScoreBoard.tsx  # Player scores display
├── types.ts            # TypeScript type definitions
├── gameData.ts         # Questions and categories
├── App.tsx             # Main application component
├── App.css             # Application styles
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Customization

### Adding Questions

Edit `src/gameData.ts` to modify questions, categories, or point values.

### Changing Number of Teams

Modify the initial state in `src/App.tsx` to adjust the number of teams.

### Styling

All styles are in CSS files co-located with components. Modify colors, fonts, and layouts to match your preferences.

## License

See LICENSE file for details.
