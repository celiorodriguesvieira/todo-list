import React from "react";
import { FaTimes } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import "./app.scss";

const App = () => {
  return (
    <React.Fragment>
      <div className="outer-container">
        <div className="inner-container">
          <div className="header">Todo List</div>
          <div className="inner-box">
            <div className="selected-task">
              <input type="text" name="description" />
              <div className="btn-container">
                <FaTimes />
              </div>
              <div className="btn-container">
                <GrUpdate />
              </div>
            </div>
            <div className="new-task">
              <input type="text" name="description" />
              <div className="btn-container">
                <FaPlus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
