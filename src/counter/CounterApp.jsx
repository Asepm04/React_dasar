import {useState} from 'react'
import Counter from '../counter/Counter.jsx'

export default function CounterApp()
{
    const [show,setShow] = useState(true);

    function handleChange(e)
    {
        setShow( e.target.checked);
    }

    return (
       <div>
         <Counter/>
        {show && <Counter/>}
        <input type="checkbox" onClick={handleChange} checked={show} /><p>save state</p>
       </div>
    )
}