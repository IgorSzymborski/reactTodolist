import React from "react";
import PropTypes from "prop-types";

const Button = ({ btnContent, onClick, color, margin }) => {
  return (
    <button type="submit" className="todo-btn" onClick={onClick} style={{background: color, margin:margin}}>
      {btnContent}
    </button>
  );
};

Button.propTypes = {};

export default Button;
