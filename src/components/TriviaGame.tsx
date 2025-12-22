import React, { useState } from 'react';
import { Sparkles, Trophy } from 'lucide-react';
import { categories, type Question, type Category } from '../triviaData';

// Type Definitions
interface Team {
  id: number;
  name: string;
  score: number;
  color: string;
}

const TriviaGame: React.FC = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [teams, setTeams] = useState<Team[]>([
    { id: 1, name: 'Equipo 1', score: 0, color: 'bg-red-500' },
    { id: 2, name: 'Equipo 2', score: 0, color: 'bg-green-500' },
    { id: 3, name: 'Equipo 3', score: 0, color: 'bg-blue-500' }
  ]);

  const handleStartGame = (): void => {
    setGameStarted(true);
  };

  const handleCategorySelect = (category: Category): void => {
    setCurrentCategory(category);
  };

  const handleQuestionSelect = (question: Question): void => {
    setCurrentQuestion(question);
    setShowAnswer(false);
  };

  const handleShowAnswer = (): void => {
    setShowAnswer(true);
  };

  const handleAddPoints = (teamId: number, points: number): void => {
    setTeams(teams.map(team => 
      team.id === teamId 
        ? { ...team, score: team.score + points }
        : team
    ));
  };

  const handleBack = (): void => {
    setCurrentQuestion(null);
    setCurrentCategory(null);
    setShowAnswer(false);
  };

  const handleResetGame = (): void => {
    setTeams(teams.map(team => ({ ...team, score: 0 })));
    setCurrentQuestion(null);
    setCurrentCategory(null);
    setShowAnswer(false);
  };

  // Welcome Screen
  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-700 via-green-700 to-red-800 flex items-center justify-center p-8">
        <div className="text-center max-w-3xl">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-20 h-20 text-yellow-300 animate-pulse" />
          </div>
          <h1 className="text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Trivia Familiar
          </h1>
          <h2 className="text-4xl text-yellow-200 mb-8">
            Posada 2025 🎄
          </h2>
          <p className="text-2xl text-white mb-12">
            ¡Pon a prueba tu conocimiento sobre nuestra familia!
          </p>
          <button
            onClick={handleStartGame}
            className="bg-yellow-400 hover:bg-yellow-300 text-red-800 font-bold text-3xl py-6 px-12 rounded-full shadow-2xl transform hover:scale-110 transition-all"
          >
            ¡Comenzar! 🎉
          </button>
        </div>
      </div>
    );
  }

  // Question View
  if (currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="flex justify-between items-center">
              <button
                onClick={handleBack}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold"
              >
                ← Regresar
              </button>
              <div className="text-white text-2xl font-bold">
                {currentQuestion.points} puntos
              </div>
            </div>
          </div>

          {/* Question */}
          <div className="bg-white rounded-3xl p-12 mb-8 shadow-2xl">
            <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center leading-tight">
              {currentQuestion.q}
            </h2>
            
            {showAnswer && (
              <div className="bg-green-100 border-4 border-green-500 rounded-2xl p-8 mt-8">
                <p className="text-3xl text-green-800 font-bold text-center">
                  {currentQuestion.a}
                </p>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {!showAnswer ? (
              <button
                onClick={handleShowAnswer}
                className="col-span-full bg-yellow-400 hover:bg-yellow-300 text-gray-800 font-bold text-3xl py-6 px-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all"
              >
                Mostrar Respuesta 👀
              </button>
            ) : (
              <>
                <div className="col-span-full text-white text-2xl text-center mb-4 font-semibold">
                  ¿Quién respondió correctamente?
                </div>
                {teams.map(team => (
                  <button
                    key={team.id}
                    onClick={() => {
                      handleAddPoints(team.id, currentQuestion.points);
                      handleBack();
                    }}
                    className={`${team.color} hover:opacity-90 text-white font-bold text-2xl py-6 px-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all`}
                  >
                    {team.name} (+{currentQuestion.points})
                  </button>
                ))}
                <button
                  onClick={handleBack}
                  className="col-span-full bg-gray-600 hover:bg-gray-500 text-white font-bold text-xl py-4 px-8 rounded-2xl"
                >
                  Nadie acertó (Regresar)
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Category Selection or Question Grid
  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-800 via-red-800 to-green-900 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Scores */}
          <div className="bg-white rounded-3xl p-8 mb-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
                <Trophy className="text-yellow-500" />
                Marcador
              </h1>
              <button
                onClick={handleResetGame}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Reiniciar Juego
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {teams.map(team => (
                <div key={team.id} className={`${team.color} rounded-2xl p-6 text-white shadow-lg`}>
                  <div className="text-xl font-semibold mb-2">{team.name}</div>
                  <div className="text-5xl font-bold">{team.score}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-2">Selecciona una Categoría</h2>
            <p className="text-xl text-yellow-200">¡Escoge sabiamente! 🎯</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category)}
                className={`${category.color} hover:opacity-90 text-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all`}
              >
                <div className="text-3xl font-bold mb-2">{category.name}</div>
                <div className="text-lg opacity-90">{category.questions.length} preguntas</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Questions Grid for selected category
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setCurrentCategory(null)}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold text-xl"
            >
              ← Cambiar Categoría
            </button>
            <h2 className={`text-3xl font-bold text-white`}>
              {currentCategory.name}
            </h2>
          </div>
        </div>

        {/* Questions */}
        <div className="grid grid-cols-1 gap-6">
          {currentCategory.questions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuestionSelect(question)}
              className="bg-white hover:bg-gray-100 rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all text-left"
            >
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800 flex-1">
                  Pregunta {index + 1}
                </div>
                <div className="text-3xl font-bold text-purple-600">
                  {question.points} pts
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TriviaGame;