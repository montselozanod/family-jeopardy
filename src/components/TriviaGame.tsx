import React, { useState, useEffect, useCallback } from 'react';
import { Sparkles, Trophy, BookOpen, Clock, AlertTriangle } from 'lucide-react';
import { categories, getQuestionsByCategory, type Question, type Category } from '../triviaData';
import QuestionReview from './QuestionReview';
import CategoryWheel from './CategoryWheel';
import MediaDisplay from './MediaDisplay';

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

  // Configuración de robo de puntos
  const [stealModeEnabled, setStealModeEnabled] = useState<boolean>(true);
  const [timeLimit, setTimeLimit] = useState<number>(30); // segundos
  
  // Estados del juego con timer
  const [selectingTeam, setSelectingTeam] = useState<boolean>(false);
  const [currentTeamIndex, setCurrentTeamIndex] = useState<number>(-1);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [stealMode, setStealMode] = useState<boolean>(false);
  const [teamsAttempted, setTeamsAttempted] = useState<Set<number>>(new Set());
  const [originalTeamIndex, setOriginalTeamIndex] = useState<number>(-1);

  // Timer effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    
    if (timerActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (timerActive && timeRemaining === 0) {
      // Tiempo agotado
      handleTimeUp();
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timeRemaining]);

  const handleTimeUp = useCallback((): void => {
    setTimerActive(false);
    
    if (!stealModeEnabled) {
      // Sin robo, mostrar respuesta y terminar
      setShowAnswer(true);
      return;
    }
    
    if (!stealMode) {
      // El equipo original falló, activar modo robo
      // Nota: activateStealMode se llama con el currentTeamIndex actual como equipo original
      setStealMode(true);
      // El equipo original no puede participar en el robo
      const attempted = new Set<number>([currentTeamIndex]);
      setTeamsAttempted(attempted);
      
      // Encontrar el siguiente equipo que puede robar
      let nextTeamIdx = -1;
      for (let i = 0; i < teams.length; i++) {
        if (!attempted.has(i)) {
          nextTeamIdx = i;
          break;
        }
      }
      
      if (nextTeamIdx !== -1) {
        setCurrentTeamIndex(nextTeamIdx);
        setTimeRemaining(timeLimit);
        setTimerActive(true);
      } else {
        // Nadie más puede robar
        setShowAnswer(true);
      }
    } else {
      // Un equipo en modo robo falló, pasar al siguiente
      moveToNextStealTeam();
    }
  }, [stealMode, stealModeEnabled, currentTeamIndex, teams.length, timeLimit]);

  const moveToNextStealTeam = (): void => {
    const newAttempted = new Set([...teamsAttempted, currentTeamIndex]);
    setTeamsAttempted(newAttempted);
    
    const nextTeamIndex = findNextStealTeam(newAttempted);
    if (nextTeamIndex !== -1) {
      setCurrentTeamIndex(nextTeamIndex);
      setTimeRemaining(timeLimit);
      setTimerActive(true);
    } else {
      // Nadie más puede robar
      setShowAnswer(true);
    }
  };

  const findNextStealTeam = (attempted: Set<number>): number => {
    for (let i = 0; i < teams.length; i++) {
      if (!attempted.has(i)) {
        return i;
      }
    }
    return -1;
  };

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
    setSelectingTeam(true);
    setStealMode(false);
    setTeamsAttempted(new Set());
    setCurrentTeamIndex(-1);
    setOriginalTeamIndex(-1);
  };

  const handleTeamSelected = (teamIndex: number): void => {
    setSelectingTeam(false);
    setCurrentTeamIndex(teamIndex);
    setOriginalTeamIndex(teamIndex);
    setTimeRemaining(timeLimit);
    setTimerActive(true);
  };

  const handleCorrectAnswer = (teamIndex: number): void => {
    if (currentQuestion) {
      const points = stealMode ? Math.floor(currentQuestion.points / 2) : currentQuestion.points;
      handleAddPoints(teams[teamIndex].id, points);
    }
    handleBack();
  };

  const handleWrongAnswer = (): void => {
    setTimerActive(false);
    
    if (!stealModeEnabled || stealMode) {
      // Sin robo habilitado o ya estamos en modo robo
      if (stealMode) {
        moveToNextStealTeam();
      } else {
        setShowAnswer(true);
      }
    } else {
      // Activar modo robo - usar originalTeamIndex directamente
      setStealMode(true);
      // El equipo original no puede participar en el robo
      const attempted = new Set<number>([originalTeamIndex]);
      setTeamsAttempted(attempted);
      
      // Encontrar el siguiente equipo que puede robar
      const nextTeamIdx = findNextStealTeam(attempted);
      if (nextTeamIdx !== -1) {
        setCurrentTeamIndex(nextTeamIdx);
        setTimeRemaining(timeLimit);
        setTimerActive(true);
      } else {
        // Nadie más puede robar
        setShowAnswer(true);
      }
    }
  };

  const handleSkipSteal = (): void => {
    // El equipo actual no quiere robar, pasar al siguiente
    setTimerActive(false);
    moveToNextStealTeam();
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
    setTimerActive(false);
    setSelectingTeam(false);
    setStealMode(false);
    setTeamsAttempted(new Set());
    setCurrentTeamIndex(-1);
    setOriginalTeamIndex(-1);
  };

  const handleResetGame = (): void => {
    setTeams(teams.map(team => ({ ...team, score: 0 })));
    setCurrentQuestion(null);
    setCurrentCategory(null);
    setShowAnswer(false);
    setAnsweredQuestions(new Set());
    setTimerActive(false);
    setSelectingTeam(false);
    setStealMode(false);
    setTeamsAttempted(new Set());
    setCurrentTeamIndex(-1);
    setOriginalTeamIndex(-1);
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

          {/* Configuración de Robo de Puntos */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              <Clock className="w-6 h-6" />
              Configuración del Juego
            </h3>
            
            {/* Toggle de Robo */}
            <div className="flex items-center justify-between mb-4 bg-white/10 rounded-lg p-4">
              <div className="text-left">
                <div className="text-white font-semibold">Robo de Puntos</div>
                <div className="text-white/70 text-sm">Si un equipo falla, otros pueden robar</div>
              </div>
              <button
                onClick={() => setStealModeEnabled(!stealModeEnabled)}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  stealModeEnabled ? 'bg-green-500' : 'bg-gray-500'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    stealModeEnabled ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Tiempo límite */}
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-white font-semibold">Tiempo por respuesta</div>
                <div className="text-yellow-300 font-bold text-xl">{timeLimit} segundos</div>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                step="5"
                value={timeLimit}
                onChange={(e) => setTimeLimit(Number(e.target.value))}
                className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-white/60 text-sm mt-1">
                <span>10s</span>
                <span>60s</span>
              </div>
            </div>

            {stealModeEnabled && (
              <p className="text-yellow-200/80 text-sm mt-3">
                💡 En modo robo, los puntos valen la mitad
              </p>
            )}
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
    // Selección de equipo inicial
    if (selectingTeam) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <button
                onClick={handleBack}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold"
              >
                ← Regresar
              </button>
            </div>

            <div className="bg-white rounded-3xl p-12 mb-8 shadow-2xl text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                ¿Qué equipo responde?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Pregunta de {currentQuestion.points} puntos
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teams.map((team, index) => (
                  <button
                    key={team.id}
                    onClick={() => handleTeamSelected(index)}
                    className={`${team.color} hover:opacity-90 text-white font-bold text-2xl py-8 px-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all`}
                  >
                    {team.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Vista de pregunta con timer
    const currentTeam = currentTeamIndex >= 0 ? teams[currentTeamIndex] : null;
    const timerPercentage = (timeRemaining / timeLimit) * 100;
    const isLowTime = timeRemaining <= 5;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header con Timer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={handleBack}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold"
              >
                ← Regresar
              </button>
              
              {/* Indicador de modo */}
              {stealMode && (
                <div className="flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-lg animate-pulse">
                  <AlertTriangle className="w-5 h-5 text-white" />
                  <span className="text-white font-bold">¡MODO ROBO!</span>
                </div>
              )}
              
              <div className="text-white text-2xl font-bold">
                {stealMode ? `${Math.floor(currentQuestion.points / 2)} pts (robo)` : `${currentQuestion.points} puntos`}
              </div>
            </div>

            {/* Timer Bar */}
            {timerActive && currentTeam && (
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <div className={`${currentTeam.color} px-4 py-2 rounded-lg`}>
                    <span className="text-white font-bold text-lg">{currentTeam.name}</span>
                  </div>
                  <div className={`flex items-center gap-2 ${isLowTime ? 'animate-pulse' : ''}`}>
                    <Clock className={`w-6 h-6 ${isLowTime ? 'text-red-400' : 'text-white'}`} />
                    <span className={`text-3xl font-bold ${isLowTime ? 'text-red-400' : 'text-white'}`}>
                      {timeRemaining}s
                    </span>
                  </div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ease-linear ${
                      isLowTime ? 'bg-red-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${timerPercentage}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Question */}
          <div className="bg-white rounded-3xl p-12 mb-8 shadow-2xl">
            <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center leading-tight">
              {currentQuestion.q}
            </h2>
            
            {/* Media con la pregunta */}
            {currentQuestion.media && 
             (currentQuestion.media.showWith === 'question' || currentQuestion.media.showWith === 'both') && (
              <MediaDisplay media={currentQuestion.media} className="mt-6" />
            )}
            
            {showAnswer && (
              <div className="bg-green-100 border-4 border-green-500 rounded-2xl p-8 mt-8">
                <p className="text-3xl text-green-800 font-bold text-center">
                  {currentQuestion.a}
                </p>
                
                {/* Media con la respuesta (solo si showWith es 'answer') */}
                {currentQuestion.media && currentQuestion.media.showWith === 'answer' && (
                  <MediaDisplay media={currentQuestion.media} className="mt-6" />
                )}
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {!showAnswer ? (
              <>
                {/* Botones durante el juego activo */}
                {timerActive && currentTeam && (
                  <>
                    <button
                      onClick={() => {
                        setTimerActive(false);
                        handleCorrectAnswer(currentTeamIndex);
                      }}
                      className="bg-green-500 hover:bg-green-400 text-white font-bold text-2xl py-6 px-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all"
                    >
                      ✓ ¡Correcto!
                    </button>
                    <button
                      onClick={handleWrongAnswer}
                      className="bg-red-500 hover:bg-red-400 text-white font-bold text-2xl py-6 px-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all"
                    >
                      ✗ Incorrecto
                    </button>
                    {stealMode && (
                      <button
                        onClick={handleSkipSteal}
                        className="col-span-full bg-gray-600 hover:bg-gray-500 text-white font-bold text-xl py-4 px-8 rounded-2xl"
                      >
                        {currentTeam.name} no quiere robar
                      </button>
                    )}
                  </>
                )}
                
                {/* Botón de mostrar respuesta (cuando no hay timer activo) */}
                {!timerActive && !stealMode && (
                  <button
                    onClick={handleShowAnswer}
                    className="col-span-full bg-yellow-400 hover:bg-yellow-300 text-gray-800 font-bold text-3xl py-6 px-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all"
                  >
                    Mostrar Respuesta 👀
                  </button>
                )}
              </>
            ) : (
              <>
                <div className="col-span-full text-white text-2xl text-center mb-4 font-semibold">
                  Nadie acertó - Respuesta mostrada
                </div>
                <button
                  onClick={handleBack}
                  className="col-span-full bg-gray-600 hover:bg-gray-500 text-white font-bold text-xl py-4 px-8 rounded-2xl"
                >
                  Continuar (Regresar)
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