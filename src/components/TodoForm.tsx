import React, { useRef } from 'react';


const TodoForm: React.FC = () => {
    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            console.log(ref.current!.value)
            ref.current!.value = '';
        }
    }

    return <div className="input-field todoform-input">
        <input
            ref={ref}
            type="text"
            id='title'
            placeholder='Купить презервативов'
            onKeyPress={keyPressHandler}/>
        <label htmlFor="title" className='active'>Введите название дела:</label>
    </div>
}

export default TodoForm;