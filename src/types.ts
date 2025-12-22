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

export interface Team {
  id: string;
  name: string;
  score: number;
}

export interface GameState {
  categories: Category[];
  teams: Team[];
  currentTeam: number;
  selectedQuestion: Question | null;
}
