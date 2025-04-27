import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContactForm from '../contact/ContactForm'
import Task from '../contact/Task'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactForm/>
    <Task/>
  </StrictMode>,
)
