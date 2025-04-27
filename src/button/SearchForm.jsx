export default function SearchForm({onClick})
{
    return(
        <form action="post">
        <input type="text" />
        <button onClick={onClick}>form</button>
    </form>
    )
}