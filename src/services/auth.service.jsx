import axios from 'axios'
import {jwtDecode} from 'jwt-decode'


export const Login = (data,callback) =>
{
    axios.post('https://fakestoreapi.com/Auth/login',data)
    .then(res=>
    {
        callback(true,res.data.token);
    })
    .catch(err =>
    {
        callback(false,err.response.data);
    }
    )
    
}

export const getUsername = () =>
{
       const token = localStorage.getItem('token');
        if(token)
        {
            const decoded = jwtDecode(token);
            return  decoded.user;
        }
        else
        {
            windows.location.href="/login";
        }
}