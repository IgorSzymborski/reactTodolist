import React from "react";
import PropTypes from "prop-types";

const Input = ({ onChange, value, placeholder }) => {
  return (
    <input
      type="text"
      className="todo-input"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
};

Input.propTypes = {};

export default Input;
