import { useState,useEffect } from 'react';
import InputForm from '../component/inputForm'
import { Login } from '../services/auth.service';



    

const LoginForm = ()=>{


    const  [token,setToken] = useState("");
    const [failedResponse,setFailedResponse] = useState("");

    useEffect(()=>
    {
        setToken(localStorage.getItem('token') || []);

    },[]);

    const handleClick = (e)=>
        {
            e.preventDefault();
            // localStorage.setItem('email',e.target.email.value);
            // localStorage.setItem('password',e.target.password.value);
            // window.location.href="/product";
        
            const data = 
            {
                username : e.target.email.value,
                password : e.target.password.value
            };
                    
        
        
            Login(data,(status,res)=>
            {
                if(status)
                {
                    localStorage.setItem('token',res);
                    window.location.href='/products';
                }
                else
                {
                    setFailedResponse(res);
                }
            });
        }


   




    return(
        <form action="" onSubmit={handleClick}>
        <InputForm label="email" htmlFor="email" placeholder="email" type="text" name="email"/>
        <InputForm label="password" htmlFor="password" placeholder="password" type="password" name="password"/>
        <input type="submit"   />
        {failedResponse && <p>{failedResponse}</p>}
    </form>
    )
}

export default LoginForm;