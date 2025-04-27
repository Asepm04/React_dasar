import {useState} from 'react'
import {useImmer} from 'use-immer'

export default function Task()
{
    const [item,setItem]= useState("");
    const [items,setItems] = useImmer([]);

    function handleChange(e)
    {
        setItem(e.target.value);
    }

    function handleClick(e)
    {
        e.preventDefault();
        setItems(draft=>
        {
            draft.push(item);
        }
        )
        setItem("");
    }

    return (
        <div>
            <form action="">
                <input type="text" onChange={handleChange} value={item} />
                <button onClick={handleClick}>click</button>
            </form>

            <h1>Task List</h1>
            <ul>
                {items.map((item,index)=>
                <li key={index}>{item}</li>
                )}
            </ul>
        </div>
    )
}