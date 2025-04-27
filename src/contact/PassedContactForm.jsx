import {useState} from 'react';

let data = {
    "name":"",
    "message" :""
};

export default function ContactForm()
{
    let [contact,setContact] = useState({data});

    function handleGetName(e)
    {
        setContact({
            ...contact,
            name: e.target.value
        })
    }

    function handleGetMessage(e)
    {
        setContact({
            ...contact,
            message : e.target.value
        })
    }

    return (
        <div>
            <form action="">
            <input type="text" onChange={handleGetName} value={contact.name} placeholder='name' />
            <input type="text" onChange={handleGetMessage} value={contact.message} placeholder='message' />
        </form>

        <h1>name : {contact.name}</h1>
        <h1>message : {contact.message}</h1>
        </div>
    )
}