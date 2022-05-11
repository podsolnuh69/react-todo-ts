import React, { useRef } from 'react';

interface TodoFromProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFromProps> = ({ onAdd }) => {
    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onAdd(ref.current!.value)
            ref.current!.value = '';
        }
    }

    return <div className="input-field todoform-input">
        <input
            ref={ref}
            type="text"
            id='title'
            placeholder='Купить презервативов'
            // обработчик на enter
            onKeyPress={keyPressHandler}/>
        <label htmlFor="title" className='active'>Введите название дела:</label>
    </div>
}

export default TodoForm;