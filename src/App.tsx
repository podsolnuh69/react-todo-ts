import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import TodosPage from "./pages/TodosPage";
import AboutPage from "./pages/AboutPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/react-todo-ts/about" element={<AboutPage />}></Route>
          <Route path="/react-todo-ts/" element={<TodosPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
