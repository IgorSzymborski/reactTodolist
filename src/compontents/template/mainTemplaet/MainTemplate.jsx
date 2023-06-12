import React from "react";
import PropTypes from "prop-types";
import TodoWrapper from "../../organisms/todoWrapper/TodoWrapper";

const MainTemplate = (props) => {
  return (
    <div className="mainTemplate">
      <TodoWrapper />
    </div>
  );
};

MainTemplate.propTypes = {};

export default MainTemplate;
