export interface Question {
  id: string;
  question: string;
  answer: string;
  value: number;
  answered: boolean;
}

export interface Category {
  id: string;
  name: string;
  questions: Question[];
}

export interface Player {
  id: string;
  name: string;
  score: number;
}

export interface GameState {
  categories: Category[];
  players: Player[];
  currentPlayer: number;
  selectedQuestion: Question | null;
}
