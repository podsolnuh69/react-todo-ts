import { ITodo } from "../interfaces";

interface TodoListProps {
    todos: ITodo[]
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {

    return <ul>
        { todos.map(todo => {
            const classes: string[] = ['todo'];
            if (todo.completed) {
                classes.push('completed')
            }

            return <li className={classes.join(' ')} key={todo.id}>
            <label>
                <input type="checkbox" checked={todo.completed}/>
                <span>{todo.title}</span>
                <i className="material-icons red-text">delete</i>
            </label>
        </li>     
        }) }
    </ul>
}

export default TodoList;