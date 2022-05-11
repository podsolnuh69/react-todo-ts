import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import Navbar from './components/Navbar';

import { ITodo } from './interfaces';

const App: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (title: string) => {
    // prev используется из-за асинхронности, это гарантия того что коллбэк работает с предыдущим state
    setTodos(prev => [
      {
        title,
        id: Date.now(),
        completed: false
      },
      ...prev
    ])
  }

  const toggleHandler = (id: number) => {

    setTodos(todos.map(el => {
      if (el.id === id) {
        el.completed = !el.completed
      }
      return el
    }))

  }

  const removeHandler = (id: number) => {
    const shouldRemove: boolean = window.confirm('Вы действительно хотите удалить элемент?');
    if (!shouldRemove) {
      return
    }
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return <>
      <Navbar/>
      <div className="container">
        <TodoForm onAdd = { addHandler } />
        <TodoList 
          todos = { todos }
          onToggle = { toggleHandler }
          onRemove = { removeHandler } 
        />
      </div>
    </>
}

export default App;
