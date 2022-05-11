import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import Navbar from './components/Navbar';

import { ITodo } from './interfaces';

const App: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (title: string) => {
    setTodos(prev => [
      {
        title,
        id: Date.now(),
        completed: false
      },
      ...prev
    ])
  }

  return <>
      <Navbar/>
      <div className="container">
        <TodoForm onAdd = {addHandler}/>
        <TodoList todos = { todos } />
      </div>
    </>
}

export default App;
