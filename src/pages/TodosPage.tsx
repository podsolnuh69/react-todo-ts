import React, { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

import { ITodo } from "../interfaces";

const TodosPage: React.FC = (props) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  // получение данных из хранилища
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];

    setTodos(saved);
  }, []);

  useEffect(() => {
    if (todos.length !== 0)
      localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    // prev используется из-за асинхронности, это гарантия того что коллбэк работает с предыдущим state
    setTodos((prev) => [
      {
        title,
        id: Date.now(),
        completed: false,
      },
      ...prev,
    ]);
  };

  const toggleHandler = (id: number) => {
    setTodos(
      todos.map((el) => {
        if (el.id === id) {
          el.completed = !el.completed;
        }
        return el;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shouldRemove: boolean = window.confirm(
      "Вы действительно хотите удалить элемент?"
    );
    if (!shouldRemove) {
      return;
    }
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  );
};

export default TodosPage;
