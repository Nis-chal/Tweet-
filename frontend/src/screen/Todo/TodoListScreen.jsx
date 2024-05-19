// src/components/TodoList.js
import React, { useEffect, useState } from "react";
import { getTodos } from "../../api/todoApi";
import TodoItem from "./todoComponents/TodoItem";
import TodoForm from "./todoComponents/TodoForm";

const TodoListScreen = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data } = await getTodos();
      setTodos(data);
    };

    fetchTodos();
  }, []);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleUpdate = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo._id === updatedTodo._id ? updatedTodo : todo))
    );
  };

  const handleDelete = (id) => {
    console.log(id);
    setTodos((prev) => prev.filter((todo) => todo._id !== id));
  };

  return (
    <div className="container">
      <h1>Todo</h1>
      <div className="row mb-4">
        <div className="col-12">
          <TodoForm onAdd={handleAdd} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="list-group">
            {todos.map((todo) => (
              <TodoItem
                key={todo._id}
                todo={todo}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                className="list-group-item"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoListScreen;
