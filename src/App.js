import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import "./app.scss";
import { IoPencilOutline } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";

const App = () => {
  // const [taskList, settaskList] = useState([]);
  // const [newTask, setNewTask] = useState([]);

  const taskList = [
    {
      id: 135,
      description:
        "Clean the house Clean the houseClean the houseClean the house",
      completed: true,
    },
    { id: 482, description: "Learn a new skill", completed: false },
    { id: 719, description: "Exercise", completed: true },
    { id: 624, description: "Write a blog post", completed: false },
    { id: 891, description: "Organize closet", completed: true },
    { id: 367, description: "Call a friend", completed: false },
    { id: 502, description: "Buy groceries", completed: true },
    { id: 198, description: "Read a book", completed: false },
    { id: 756, description: "Plan vacation", completed: true },
    { id: 943, description: "Finish homework", completed: false },
    { id: 285, description: "Learn a new skill", completed: true },
    { id: 619, description: "Call a friend", completed: false },
    { id: 741, description: "Write a blog post", completed: true },
    { id: 508, description: "Buy groceries", completed: false },
    { id: 129, description: "Organize closet", completed: true },
    { id: 370, description: "Exercise", completed: false },
    { id: 952, description: "Read a book", completed: true },
    { id: 654, description: "Plan vacation", completed: false },
    { id: 427, description: "Finish homework", completed: true },
    { id: 846, description: "Clean the house", completed: false },
  ];
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
            <div className="filters">
              <div className="inner">
                <span>All</span>
                <span>Pending</span>
                <span>Completed</span>
              </div>

              <div className="tasks">
                {taskList ? (
                  taskList.map((task, index) => (
                    <div
                      className={`single-task ${
                        task.completed ? "completed" : "pending"
                      } `}
                    >
                      <p>{task.description}</p>
                      <div className="actions">
                        <div className="btn-container btn edit">
                          <IoPencilOutline />
                        </div>
                      </div>
                      <div className="actions">
                        <div className="btn-container btn completed">
                          <FaCheck />
                        </div>
                        <div className="actions">
                          <div className="btn-container btn delete">
                            <FaRegTrashCan />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <span>No Tasks Found</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
