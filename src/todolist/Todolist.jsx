import Todo from './Todo.jsx';

export default function Todolist()
{
    const data = [
        {
            id : 0,
            text : "learn html",
            isCompleted : true
        },
        {
            id : 1,
            text : "learn css",
            isCompleted : true
        },
        {
            id : 2,
            text : "learn laravel",
            isCompleted : true
        },
        {
            id : 3,
            text : "learn react",
            isCompleted : false
        }
    ];

    const todos = data.map((todo) => <Todo key={todo.id} {...todo} />);
    return (
    <li>
        {todos}
    </li>
    )
    
}