import React, { useState } from 'react';
import type { Question } from '../types';
import './QuestionModal.css';

interface QuestionModalProps {
  question: Question;
  onClose: () => void;
  onAnswer: (correct: boolean) => void;
  currentPlayerName: string;
}

const QuestionModal: React.FC<QuestionModalProps> = ({
  question,
  onClose,
  onAnswer,
  currentPlayerName
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCorrect = () => {
    onAnswer(true);
    onClose();
  };

  const handleIncorrect = () => {
    onAnswer(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>${question.value}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="current-player">
            Current Player: <strong>{currentPlayerName}</strong>
          </div>
          
          <div className="question-text">
            {question.question}
          </div>

          {!showAnswer ? (
            <button 
              className="show-answer-button"
              onClick={() => setShowAnswer(true)}
            >
              Show Answer
            </button>
          ) : (
            <>
              <div className="answer-text">
                <strong>Answer:</strong> {question.answer}
              </div>
              
              <div className="answer-buttons">
                <button 
                  className="correct-button"
                  onClick={handleCorrect}
                >
                  ✓ Correct
                </button>
                <button 
                  className="incorrect-button"
                  onClick={handleIncorrect}
                >
                  ✗ Incorrect
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;
