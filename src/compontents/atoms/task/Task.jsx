import React from "react";
import PropTypes from "prop-types";

const Task = ({ onClick, task }) => {
  return (
    <p onClick={onClick} className={`${task.completed ? "completed" : ""}`}>
      {task.task}
    </p>
  );
};

Task.propTypes = {};

export default Task;
