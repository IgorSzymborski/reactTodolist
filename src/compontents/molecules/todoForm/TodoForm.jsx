import React, { useState } from "react";
import Button from "../../atoms/button/Button";
import Input from "../../atoms/input/Input";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        value={value}
        placeholder="Wprowadź nowe zadanie"
      />

      <Button btnContent={"Add task"} color={'#9ADB58'} margin={'0px 0px 0px 10px'} />
    </form>
  );
};

TodoForm.propTypes = {};

export default TodoForm;
