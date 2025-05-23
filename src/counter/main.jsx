import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CounterApp from '../counter/CounterApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp/>
  </StrictMode>,
)
