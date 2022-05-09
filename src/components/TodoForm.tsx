import React from 'react';

const TodoForm: React.FC = () => {
    return <div className="input-field todoform-input">
        <input type="text" id='title' placeholder='Купить презервативов'/>
        <label htmlFor="title" className='active'>Введите название дела:</label>
    </div>
}

export default TodoForm;