import type { Category } from './types';

export const initialCategories: Category[] = [
  {
    id: 'cat1',
    name: 'Science',
    questions: [
      {
        id: 'q1',
        question: 'What is the largest planet in our solar system?',
        answer: 'Jupiter',
        value: 200,
        answered: false
      },
      {
        id: 'q2',
        question: 'What is the chemical symbol for gold?',
        answer: 'Au',
        value: 400,
        answered: false
      },
      {
        id: 'q3',
        question: 'What is the speed of light in vacuum (in km/s)?',
        answer: 'Approximately 300,000 km/s',
        value: 600,
        answered: false
      },
      {
        id: 'q4',
        question: 'What is the powerhouse of the cell?',
        answer: 'Mitochondria',
        value: 800,
        answered: false
      },
      {
        id: 'q5',
        question: 'What is the most abundant gas in Earth\'s atmosphere?',
        answer: 'Nitrogen',
        value: 1000,
        answered: false
      }
    ]
  },
  {
    id: 'cat2',
    name: 'History',
    questions: [
      {
        id: 'q6',
        question: 'In what year did World War II end?',
        answer: '1945',
        value: 200,
        answered: false
      },
      {
        id: 'q7',
        question: 'Who was the first president of the United States?',
        answer: 'George Washington',
        value: 400,
        answered: false
      },
      {
        id: 'q8',
        question: 'What ancient wonder of the world still stands today?',
        answer: 'The Great Pyramid of Giza',
        value: 600,
        answered: false
      },
      {
        id: 'q9',
        question: 'In what year did the Berlin Wall fall?',
        answer: '1989',
        value: 800,
        answered: false
      },
      {
        id: 'q10',
        question: 'What was the name of the ship that brought the Pilgrims to America?',
        answer: 'The Mayflower',
        value: 1000,
        answered: false
      }
    ]
  },
  {
    id: 'cat3',
    name: 'Geography',
    questions: [
      {
        id: 'q11',
        question: 'What is the capital of France?',
        answer: 'Paris',
        value: 200,
        answered: false
      },
      {
        id: 'q12',
        question: 'Which river is the longest in the world?',
        answer: 'The Nile River',
        value: 400,
        answered: false
      },
      {
        id: 'q13',
        question: 'What is the smallest country in the world?',
        answer: 'Vatican City',
        value: 600,
        answered: false
      },
      {
        id: 'q14',
        question: 'Which is the largest hot desert in the world?',
        answer: 'The Sahara Desert',
        value: 800,
        answered: false
      },
      {
        id: 'q15',
        question: 'What is the deepest point in the ocean?',
        answer: 'Mariana Trench (Challenger Deep)',
        value: 1000,
        answered: false
      }
    ]
  },
  {
    id: 'cat4',
    name: 'Movies',
    questions: [
      {
        id: 'q16',
        question: 'Who directed "The Godfather"?',
        answer: 'Francis Ford Coppola',
        value: 200,
        answered: false
      },
      {
        id: 'q17',
        question: 'What year was the first "Star Wars" movie released?',
        answer: '1977',
        value: 400,
        answered: false
      },
      {
        id: 'q18',
        question: 'Which movie won the Academy Award for Best Picture in 1994?',
        answer: 'Forrest Gump',
        value: 600,
        answered: false
      },
      {
        id: 'q19',
        question: 'Who played Jack Dawson in "Titanic"?',
        answer: 'Leonardo DiCaprio',
        value: 800,
        answered: false
      },
      {
        id: 'q20',
        question: 'What is the highest-grossing film of all time (not adjusted for inflation)?',
        answer: 'Avatar',
        value: 1000,
        answered: false
      }
    ]
  },
  {
    id: 'cat5',
    name: 'Sports',
    questions: [
      {
        id: 'q21',
        question: 'How many players are on a basketball team on the court?',
        answer: '5',
        value: 200,
        answered: false
      },
      {
        id: 'q22',
        question: 'What sport is known as "the beautiful game"?',
        answer: 'Soccer (Football)',
        value: 400,
        answered: false
      },
      {
        id: 'q23',
        question: 'In what year were the first modern Olympics held?',
        answer: '1896',
        value: 600,
        answered: false
      },
      {
        id: 'q24',
        question: 'Which tennis tournament is played on grass courts?',
        answer: 'Wimbledon',
        value: 800,
        answered: false
      },
      {
        id: 'q25',
        question: 'Who holds the record for most home runs in MLB history?',
        answer: 'Barry Bonds',
        value: 1000,
        answered: false
      }
    ]
  },
  {
    id: 'cat6',
    name: 'Literature',
    questions: [
      {
        id: 'q26',
        question: 'Who wrote "Romeo and Juliet"?',
        answer: 'William Shakespeare',
        value: 200,
        answered: false
      },
      {
        id: 'q27',
        question: 'What is the first book in the Harry Potter series?',
        answer: 'Harry Potter and the Philosopher\'s Stone (or Sorcerer\'s Stone)',
        value: 400,
        answered: false
      },
      {
        id: 'q28',
        question: 'Who wrote "1984"?',
        answer: 'George Orwell',
        value: 600,
        answered: false
      },
      {
        id: 'q29',
        question: 'In what language was "Don Quixote" originally written?',
        answer: 'Spanish',
        value: 800,
        answered: false
      },
      {
        id: 'q30',
        question: 'Who wrote "One Hundred Years of Solitude"?',
        answer: 'Gabriel García Márquez',
        value: 1000,
        answered: false
      }
    ]
  }
];
