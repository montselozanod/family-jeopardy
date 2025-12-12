import React from 'react';
import type { Player } from '../types';
import './ScoreBoard.css';

interface ScoreBoardProps {
  players: Player[];
  currentPlayer: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ players, currentPlayer }) => {
  return (
    <div className="score-board">
      <h2 className="score-title">Players</h2>
      <div className="players-container">
        {players.map((player, index) => (
          <div
            key={player.id}
            className={`player-card ${index === currentPlayer ? 'active' : ''}`}
          >
            <div className="player-name">{player.name}</div>
            <div className="player-score">${player.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreBoard;
