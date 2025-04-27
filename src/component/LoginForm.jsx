import InputForm from '../component/inputForm'

const handleClick = (e)=>
{
    e.preventDefault();
    localStorage.setItem('email',e.target.email.value);
    localStorage.setItem('password',e.target.password.value);
    window.location.href="/product";
}

const LoginForm = ()=>{
    return(
        <form action="" onSubmit={handleClick}>
        <InputForm label="email" htmlFor="email" placeholder="email" type="text" name="email"/>
        <InputForm label="password" htmlFor="password" placeholder="password" type="password" name="password"/>
        <input type="submit"   />
    </form>
    )
}

export default LoginForm;