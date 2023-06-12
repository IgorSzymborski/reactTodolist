import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/button/Button";
import Task from "../../atoms/task/Task";

const Todo = ({ task, toggleCompleted, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <Task onClick={() => toggleCompleted(task.id)} task={task} />
      
      <div>
        <Button btnContent={"Edit task"} onClick={() => editTodo(task.id)} color={'#518AE8'} margin={'0px 10px 0px 0px'} />
        <Button btnContent={"Delete"} onClick={() => deleteTodo(task.id)} color={'#C22C0E'} />
      </div>
    </div>
  );
};

Todo.propTypes = {};

export default Todo;
