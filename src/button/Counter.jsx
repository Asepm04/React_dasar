import {useState} from 'react';

export default function Counter()
{
    let [counter,setCounter] = useState(0);

    return(
        <div>
            <button 
            onClick={()=>
            {
                alert('added');
                setCounter(counter + 1);
                console.log(counter);
             }
            }>increment</button>
            <h1>counter : {counter}</h1>
        </div>
    )

}