import {jwtDecode} from 'jwt-decode'
import {useEffect,useState} from 'react'


export const Login = () =>
{
    const [username,setUsername] = useState("");
        useEffect(() =>
        {
            const token = localStorage.getItem('token');
        if(token)
        {
            const decoded = jwtDecode(token);
           setUsername(decoded.user);
        }
        else
        {
            window.location.href="/login";
        }

        },[]);
        return username;
        

}