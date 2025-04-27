export default function SayHelloForm()
{
    function onHello(e)
    {
        e.preventDefault();
        const  name = document.getElementById('text').value;
        alert('say hello');
        document.getElementById('htext').innerText = `hello ${name}`;

    }

    return (
        <div>
            <form action="">
                <input type="text" id="text" />
                <button onClick={onHello}>say</button>
            </form>
            <h1 id="htext"> hello world</h1>
        </div>
    )
}