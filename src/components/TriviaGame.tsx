import React, { useState } from 'react';
import { Sparkles, Trophy, BookOpen } from 'lucide-react';
import { categories, getQuestionsByCategory, type Question, type Category } from '../triviaData';
import QuestionReview from './QuestionReview';
import CategoryWheel from './CategoryWheel';

// Type Definitions
interface Team {
  id: number;
  name: string;
  score: number;
  color: string;
}

const TEAM_COLORS = [
  'bg-red-500',
  'bg-green-500', 
  'bg-blue-500',
  'bg-yellow-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-orange-500',
  'bg-teal-500'
];

const TriviaGame: React.FC = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [showReview, setShowReview] = useState<boolean>(false);
  const [showWheel, setShowWheel] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set());
  const [teams, setTeams] = useState<Team[]>([
    { id: 1, name: 'Equipo 1', score: 0, color: 'bg-red-500' },
    { id: 2, name: 'Equipo 2', score: 0, color: 'bg-green-500' },
    { id: 3, name: 'Equipo 3', score: 0, color: 'bg-blue-500' }
  ]);

  const handleAddTeam = (): void => {
    if (teams.length >= TEAM_COLORS.length) return;
    const newId = Math.max(...teams.map(t => t.id)) + 1;
    setTeams([...teams, {
      id: newId,
      name: `Equipo ${teams.length + 1}`,
      score: 0,
      color: TEAM_COLORS[teams.length]
    }]);
  };

  const handleRemoveTeam = (teamId: number): void => {
    if (teams.length <= 2) return;
    setTeams(teams.filter(t => t.id !== teamId));
  };

  const handleTeamNameChange = (teamId: number, newName: string): void => {
    setTeams(teams.map(team => 
      team.id === teamId ? { ...team, name: newName } : team
    ));
  };

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
    if (currentQuestion) {
      // Marcar la pregunta como respondida usando el id de la pregunta
      setAnsweredQuestions(prev => new Set([...prev, currentQuestion.id.toString()]));
    }
    setCurrentQuestion(null);
    setCurrentCategory(null);
    setShowAnswer(false);
  };

  const handleResetGame = (): void => {
    setTeams(teams.map(team => ({ ...team, score: 0 })));
    setCurrentQuestion(null);
    setCurrentCategory(null);
    setShowAnswer(false);
    setAnsweredQuestions(new Set());
  };

  // Get completed categories (all questions answered)
  const getCompletedCategories = (): string[] => {
    return categories
      .filter(category => {
        const categoryQuestions = getQuestionsByCategory(category.id);
        const answeredInCategory = categoryQuestions.filter(q => 
          answeredQuestions.has(q.id.toString())
        ).length;
        return answeredInCategory === categoryQuestions.length;
      })
      .map(c => c.id);
  };

  const handleWheelCategorySelected = (category: Category): void => {
    setShowWheel(false);
    setCurrentCategory(category);
  };

  // Question Review Screen
  if (showReview) {
    return <QuestionReview onBack={() => setShowReview(false)} />;
  }

  // Welcome Screen
  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-700 via-green-700 to-red-800 flex items-center justify-center p-8">
        <div className="text-center max-w-3xl w-full">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-20 h-20 text-yellow-300 animate-pulse" />
          </div>
          <h1 className="text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Trivia Familiar
          </h1>
          <h2 className="text-4xl text-yellow-200 mb-8">
            Posada 2025 🎄
          </h2>
          
          {/* Team Configuration */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Configura los Equipos</h3>
            <div className="space-y-3">
              {teams.map((team, index) => (
                <div key={team.id} className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full ${team.color}`}></div>
                  <input
                    type="text"
                    value={team.name}
                    onChange={(e) => handleTeamNameChange(team.id, e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg text-lg font-semibold text-gray-800 bg-white"
                    placeholder={`Equipo ${index + 1}`}
                  />
                  {teams.length > 2 && (
                    <button
                      onClick={() => handleRemoveTeam(team.id)}
                      className="bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-lg font-bold text-xl"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>
            
            {teams.length < TEAM_COLORS.length && (
              <button
                onClick={handleAddTeam}
                className="mt-4 bg-white/30 hover:bg-white/40 text-white font-bold py-3 px-6 rounded-lg w-full text-lg"
              >
                + Agregar Equipo
              </button>
            )}
            
            <p className="text-white/70 text-sm mt-3">
              Mínimo 2 equipos, máximo {TEAM_COLORS.length} equipos
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartGame}
              className="bg-yellow-400 hover:bg-yellow-300 text-red-800 font-bold text-3xl py-6 px-12 rounded-full shadow-2xl transform hover:scale-110 transition-all"
            >
              ¡Comenzar! 🎉
            </button>
            <button
              onClick={() => setShowReview(true)}
              className="bg-white/20 hover:bg-white/30 text-white font-bold text-xl py-4 px-8 rounded-full shadow-xl transform hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <BookOpen size={24} />
              Revisar Preguntas
            </button>
          </div>
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
          {/* Category Wheel Modal */}
          {showWheel && (
            <CategoryWheel
              categories={categories}
              onCategorySelected={handleWheelCategorySelected}
              onClose={() => setShowWheel(false)}
              disabledCategories={getCompletedCategories()}
            />
          )}

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
            <div className={`grid gap-6 ${
              teams.length === 2 ? 'grid-cols-2' : 
              teams.length === 3 ? 'grid-cols-3' : 
              teams.length === 4 ? 'grid-cols-2 md:grid-cols-4' : 
              'grid-cols-2 md:grid-cols-4 lg:grid-cols-4'
            }`}>
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
            <p className="text-xl text-yellow-200 mb-4">¡Escoge sabiamente! 🎯</p>
            <button
              onClick={() => setShowWheel(true)}
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-800 font-bold text-xl py-4 px-8 rounded-full shadow-xl transform hover:scale-105 transition-all animate-pulse"
            >
              🎰 ¡Girar la Ruleta!
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(category => {
              const categoryQuestions = getQuestionsByCategory(category.id);
              const answeredInCategory = categoryQuestions.filter(q => 
                answeredQuestions.has(q.id.toString())
              ).length;
              const remainingQuestions = categoryQuestions.length - answeredInCategory;
              const isCompleted = remainingQuestions === 0;
              
              return (
                <button
                  key={category.id}
                  onClick={() => !isCompleted && handleCategorySelect(category)}
                  disabled={isCompleted}
                  className={`${isCompleted ? 'bg-gray-500' : category.color} ${isCompleted ? 'opacity-60 cursor-not-allowed' : 'hover:opacity-90 transform hover:scale-105'} text-white rounded-2xl p-8 shadow-xl transition-all relative overflow-hidden`}
                >
                  {isCompleted && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <span className="text-6xl">✓</span>
                    </div>
                  )}
                  <div className={`text-3xl font-bold mb-2 ${isCompleted ? 'line-through opacity-70' : ''}`}>
                    {category.name}
                  </div>
                  <div className="text-lg opacity-90">
                    {isCompleted 
                      ? '¡Completada!' 
                      : `${remainingQuestions} de ${categoryQuestions.length} preguntas restantes`
                    }
                  </div>
                </button>
              );
            })}
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
          {getQuestionsByCategory(currentCategory.id).map((question, index) => {
            const isAnswered = answeredQuestions.has(question.id.toString());
            
            return (
              <button
                key={question.id}
                onClick={() => !isAnswered && handleQuestionSelect(question)}
                disabled={isAnswered}
                className={`rounded-2xl p-8 shadow-xl transition-all text-left ${
                  isAnswered 
                    ? 'bg-gray-400 cursor-not-allowed opacity-60' 
                    : 'bg-white hover:bg-gray-100 transform hover:scale-105'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className={`text-2xl font-bold flex-1 ${isAnswered ? 'text-gray-600 line-through' : 'text-gray-800'}`}>
                    Pregunta {index + 1}
                    {isAnswered && <span className="ml-3 text-lg">✓ Respondida</span>}
                  </div>
                  <div className={`text-3xl font-bold ${isAnswered ? 'text-gray-500' : 'text-purple-600'}`}>
                    {question.points} pts
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TriviaGame;