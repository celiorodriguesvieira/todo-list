import React from "react";
import "./app.scss";

const App = () => {
  return (
    <React.Fragment>
      <div className="outer-container">
        <div className="inner-container">
          <div className="header">Todo List</div>
          <div className="inner-box"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
