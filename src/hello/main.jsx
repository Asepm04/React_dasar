import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Container from './container.jsx'
import HelloWorld from './HelloWord.jsx'
import Todolist from '../todolist/Todolist.jsx'
import AllertButton from '../button/AllertButton.jsx'
import OnSmash from '../button/Smash.jsx'
import Tolbar from '../button/Tolbar.jsx'
import SearchForm from '../button/SearchForm.jsx'
import SayHelloForm from '../button/SayHelloForm.jsx'
import Counter from '../button/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
    <HelloWorld />
    <Todolist/>
    </Container>
    {/* /<AllertButton  text="click me"/> */}
    < OnSmash text="test me" onSmash= {()=>alert('testing me')} />
    <Tolbar onClick={(e)=> 
      {
        e.stopPropagation();
         alert('testing me')
      }}/>

      <SearchForm onClick={(e)=>{
        e.preventDefault();
        alert("you search")
      }}/>

      <SayHelloForm/>
      <Counter/>
  </StrictMode>,
)
