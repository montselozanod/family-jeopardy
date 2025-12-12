import React from 'react';
import type { Question } from '../types';
import './GameBoard.css';

interface GameBoardProps {
  categories: {
    id: string;
    name: string;
    questions: Question[];
  }[];
  onQuestionClick: (question: Question) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ categories, onQuestionClick }) => {
  return (
    <div className="game-board">
      <div className="categories-header">
        {categories.map((category) => (
          <div key={category.id} className="category-header">
            {category.name}
          </div>
        ))}
      </div>
      <div className="questions-grid">
        {[0, 1, 2, 3, 4].map((rowIndex) => (
          <div key={rowIndex} className="questions-row">
            {categories.map((category) => {
              const question = category.questions[rowIndex];
              return (
                <div
                  key={question.id}
                  className={`question-cell ${question.answered ? 'answered' : ''}`}
                  onClick={() => !question.answered && onQuestionClick(question)}
                >
                  {question.answered ? '' : `$${question.value}`}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
