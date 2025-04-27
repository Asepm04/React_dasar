export default function AllertButton({text})
{
    function ButtonClick()
    {
        alert("button clicked");
    }
S
    return (
        <button onClick={ButtonClick}>{text}</button>
    )
}