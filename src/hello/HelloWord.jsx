function HelloWord(){
    const props={
        text:"hello world from spread syntax"
    }
    return (
        <div>
            <Hello {...props} />
            <Paragraph />
        </div>
    )
}
export default HelloWord;

export function Hello({text="ups,lupa kasih text"}){
    return (
        <h1>{text.toUpperCase()}</h1>
    )
}

export function Paragraph(){
    return(
        <p>selamat belajar reactJs by Programmer Jaman Now multiple component</p>

    )
}