import { useState } from 'react';
import GameBoard from './components/GameBoard';
import QuestionModal from './components/QuestionModal';
import ScoreBoard from './components/ScoreBoard';
import { initialCategories } from './gameData';
import type { Question, Category, Team } from './types';
import './App.css';

function App() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [teams, setTeams] = useState<Team[]>([
    { id: 't1', name: 'Team 1', score: 0 },
    { id: 't2', name: 'Team 2', score: 0 },
    { id: 't3', name: 'Team 3', score: 0 }
  ]);
  const [currentTeam, setCurrentTeam] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [teamNames, setTeamNames] = useState(['Team 1', 'Team 2', 'Team 3']);

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
      setTeams(prevTeams =>
        prevTeams.map((team, index) =>
          index === currentTeam
            ? { ...team, score: team.score + selectedQuestion.value }
            : team
        )
      );
    } else {
      setTeams(prevTeams =>
        prevTeams.map((team, index) =>
          index === currentTeam
            ? { ...team, score: team.score - selectedQuestion.value }
            : team
        )
      );
    }

    setCurrentTeam((currentTeam + 1) % teams.length);
  };

  const handleStartGame = () => {
    setTeams(prevTeams =>
      prevTeams.map((team, index) => ({
        ...team,
        name: teamNames[index] || `Team ${index + 1}`
      }))
    );
    setGameStarted(true);
  };

  const handleResetGame = () => {
    setCategories(initialCategories);
    setTeams([
      { id: 't1', name: teamNames[0] || 'Team 1', score: 0 },
      { id: 't2', name: teamNames[1] || 'Team 2', score: 0 },
      { id: 't3', name: teamNames[2] || 'Team 3', score: 0 }
    ]);
    setCurrentTeam(0);
    setSelectedQuestion(null);
  };

  const handleTeamNameChange = (index: number, name: string) => {
    const newNames = [...teamNames];
    newNames[index] = name;
    setTeamNames(newNames);
  };

  if (!gameStarted) {
    return (
      <div className="app">
        <div className="setup-container">
          <h1 className="game-title">🎯 Family Trivia!</h1>
          <div className="setup-form">
            <h2>Enter Team Names</h2>
            {[0, 1, 2].map((index) => (
              <div key={index} className="player-input">
                <label>Team {index + 1}:</label>
                <input
                  type="text"
                  value={teamNames[index]}
                  onChange={(e) => handleTeamNameChange(index, e.target.value)}
                  placeholder={`Team ${index + 1}`}
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
        <h1 className="game-title">🎯 Family Trivia!</h1>
        <button className="reset-button" onClick={handleResetGame}>
          Reset Game
        </button>
      </header>

      <ScoreBoard teams={teams} currentTeam={currentTeam} />
      
      <GameBoard
        categories={categories}
        onQuestionClick={handleQuestionClick}
      />

      {selectedQuestion && (
        <QuestionModal
          question={selectedQuestion}
          onClose={() => setSelectedQuestion(null)}
          onAnswer={handleAnswer}
          currentTeamName={teams[currentTeam].name}
        />
      )}
    </div>
  );
}

export default App;
