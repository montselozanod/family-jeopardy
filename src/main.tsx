import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TriviaGame from './components/TriviaGame'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TriviaGame />
  </StrictMode>,
)