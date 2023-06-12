import React, { useEffect, useState } from "react";
import TodoForm from "../../molecules/todoForm/TodoForm";
import Todo from "../../molecules/todo/Todo";
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from "../../molecules/editTodoForm/EditTodoForm";
import Button from "../../atoms/button/Button";
uuidv4();

const TodoWrapper = (props) => {
  const [todos, setTodos] = useState([]);
  const [pagination, setPagination] = useState(3);

  

  useEffect(() => {
    if (localStorage.getItem("todolist") !== null) {
      let prevItems = JSON.parse(localStorage.getItem("todolist") || []);
      setTodos(prevItems);
    }else{
      setTodos([])
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todolist", JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    localStorage.setItem("todolist", JSON.stringify(todos));
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    if (todos.length <= 0) {
      localStorage.removeItem("todolist");
    } else {
      localStorage.setItem("todolist", JSON.stringify(todos));
    }
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const increasePagination = (params) => {
    if (todos.length >= pagination) {
      setPagination((prevState) => prevState + 3);
    } else {
      return;
    }
  };

  const decreasePagination = (params) => {
    if (pagination > 3) {
      setPagination((prevState) => prevState - 3);
    } else {
      return;
    }
  };

  return (
    <div className="TodoWrapper">
      <h1>Tasks list: {todos.length}</h1>
      <TodoForm addTodo={addTodo} />

      {todos
        .slice(0, pagination)
        .map((todo, index) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} key={index} />
          ) : (
            <Todo
              task={todo}
              key={index}
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        )}
      <div>
        <Button btnContent={"More..."} onClick={increasePagination} margin={'0px 10px 0px 0px'} />
        <Button btnContent={"Less..."} onClick={decreasePagination} />
      </div>
    </div>
  );
};

TodoWrapper.propTypes = {};

export default TodoWrapper;
