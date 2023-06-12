import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/button/Button";
import Input from "../../atoms/input/Input";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const targetValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <Input
        onChange={targetValue}
        value={value}
        placeholder="Zaktualizuj zadanie"
      />

      <Button btnContent={"Save"} color={'#3DDB36'} margin={'0px 0px 0px 10px'} />
    </form>
  );
};

EditTodoForm.propTypes = {};

export default EditTodoForm;
