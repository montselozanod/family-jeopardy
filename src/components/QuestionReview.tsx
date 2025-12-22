import React from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { categories, questions, getQuestionsByCategory } from '../triviaData';

interface QuestionReviewProps {
  onBack: () => void;
}

const QuestionReview: React.FC<QuestionReviewProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="flex justify-between items-center">
            <button
              onClick={onBack}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Regresar
            </button>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <BookOpen className="text-yellow-400" />
              Revisión de Preguntas
            </h1>
          </div>
        </div>

        {/* Categories with Questions */}
        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Category Header */}
              <div className={`${category.color} p-6`}>
                <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                <p className="text-white/80 mt-1">{getQuestionsByCategory(category.id).length} preguntas</p>
              </div>

              {/* Questions List */}
              <div className="divide-y divide-gray-200">
                {getQuestionsByCategory(category.id).map((question, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <span className="bg-gray-200 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
                        #{index + 1}
                      </span>
                      <span className={`${category.color} text-white text-sm font-bold px-3 py-1 rounded-full`}>
                        {question.points} pts
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
                          Pregunta:
                        </p>
                        <p className="text-lg text-gray-800 font-medium">
                          {question.q}
                        </p>
                      </div>
                      
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                        <p className="text-xs uppercase tracking-wide text-green-600 font-semibold mb-1">
                          Respuesta:
                        </p>
                        <p className="text-lg text-green-800 font-semibold">
                          {question.a}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Footer */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
          <p className="text-white text-lg">
            Total: <span className="font-bold text-yellow-400">{questions.length}</span> preguntas en <span className="font-bold text-yellow-400">{categories.length}</span> categorías
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionReview;
