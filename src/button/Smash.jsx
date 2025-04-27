export default function  Smash({text,onSmash}){

    return (
        <button onClick={onSmash}>{text}</button>
    );
}