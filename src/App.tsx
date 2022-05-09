import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

import Navbar from './components/Navbar';

const App: React.FC = () => {
  return <>
      <Navbar/>
      <div className="container">
        <TodoForm/>
      </div>
    </>
}

export default App;
