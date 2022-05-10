import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

import Navbar from './components/Navbar';

const App: React.FC = () => {

  const [todos, setTodos] = useState([])

  const addHandler = (title: string) => {
    console.log("Add New Todo", title)
  }

  return <>
      <Navbar/>
      <div className="container">
        <TodoForm onAdd = {addHandler}/>
      </div>
    </>
}

export default App;
