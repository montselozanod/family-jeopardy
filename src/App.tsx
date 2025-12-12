import { useState } from 'react';
import GameBoard from './components/GameBoard';
import QuestionModal from './components/QuestionModal';
import ScoreBoard from './components/ScoreBoard';
import { initialCategories } from './gameData';
import type { Question, Category, Player } from './types';
import './App.css';

function App() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [players, setPlayers] = useState<Player[]>([
    { id: 'p1', name: 'Player 1', score: 0 },
    { id: 'p2', name: 'Player 2', score: 0 },
    { id: 'p3', name: 'Player 3', score: 0 }
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerNames, setPlayerNames] = useState(['Player 1', 'Player 2', 'Player 3']);

  const handleQuestionClick = (question: Question) => {
    setSelectedQuestion(question);
  };

  const handleAnswer = (correct: boolean) => {
    if (!selectedQuestion) return;

    setCategories(prevCategories =>
      prevCategories.map(category => ({
        ...category,
        questions: category.questions.map(q =>
          q.id === selectedQuestion.id ? { ...q, answered: true } : q
        )
      }))
    );

    if (correct) {
      setPlayers(prevPlayers =>
        prevPlayers.map((player, index) =>
          index === currentPlayer
            ? { ...player, score: player.score + selectedQuestion.value }
            : player
        )
      );
    } else {
      setPlayers(prevPlayers =>
        prevPlayers.map((player, index) =>
          index === currentPlayer
            ? { ...player, score: player.score - selectedQuestion.value }
            : player
        )
      );
    }

    setCurrentPlayer((currentPlayer + 1) % players.length);
  };

  const handleStartGame = () => {
    setPlayers(prevPlayers =>
      prevPlayers.map((player, index) => ({
        ...player,
        name: playerNames[index] || `Player ${index + 1}`
      }))
    );
    setGameStarted(true);
  };

  const handleResetGame = () => {
    setCategories(initialCategories);
    setPlayers([
      { id: 'p1', name: playerNames[0] || 'Player 1', score: 0 },
      { id: 'p2', name: playerNames[1] || 'Player 2', score: 0 },
      { id: 'p3', name: playerNames[2] || 'Player 3', score: 0 }
    ]);
    setCurrentPlayer(0);
    setSelectedQuestion(null);
  };

  const handlePlayerNameChange = (index: number, name: string) => {
    const newNames = [...playerNames];
    newNames[index] = name;
    setPlayerNames(newNames);
  };

  if (!gameStarted) {
    return (
      <div className="app">
        <div className="setup-container">
          <h1 className="game-title">Family Jeopardy!</h1>
          <div className="setup-form">
            <h2>Enter Player Names</h2>
            {[0, 1, 2].map((index) => (
              <div key={index} className="player-input">
                <label>Player {index + 1}:</label>
                <input
                  type="text"
                  value={playerNames[index]}
                  onChange={(e) => handlePlayerNameChange(index, e.target.value)}
                  placeholder={`Player ${index + 1}`}
                />
              </div>
            ))}
            <button className="start-button" onClick={handleStartGame}>
              Start Game
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="game-title">Family Jeopardy!</h1>
        <button className="reset-button" onClick={handleResetGame}>
          Reset Game
        </button>
      </header>

      <ScoreBoard players={players} currentPlayer={currentPlayer} />
      
      <GameBoard
        categories={categories}
        onQuestionClick={handleQuestionClick}
      />

      {selectedQuestion && (
        <QuestionModal
          question={selectedQuestion}
          onClose={() => setSelectedQuestion(null)}
          onAnswer={handleAnswer}
          currentPlayerName={players[currentPlayer].name}
        />
      )}
    </div>
  );
}

export default App;
