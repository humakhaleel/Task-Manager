import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineForm } from "react-icons/ai";

function Todolist({ tasks, deleteT, taskStatus }) {
  const [edit, setEdit] = useState(null);
  const [newTaskName, setNewTaskName] = useState("");

  const handleEditClick = (i, currentName) => {
    setEdit(i);
    setNewTaskName(currentName);
  };

  const handleSaveClick = (i) => {
    tasks[i].name = newTaskName; 
    setEdit(null); 
  };
  return tasks.length > 0 ? (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((item, index) => {
          return (
            <tr>
              <td>
                {edit === index ? (
                  <input
                    type="text"
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                <button
                  className={
                    item.status
                      ? "bg-gray-400 rounded-lg w-20"
                      : "bg-teal-600 rounded-lg w-20 "
                  }
                  onClick={() => {
                    taskStatus(index);
                  }}
                >
                  {item.status ? "Completed" : "Active"}
                </button>
              </td>

              <div className="gap-10 ">
                
                  {edit === index ? (
                    <button
                      className=" bg-teal-400 border-none rounded-lg  w-10  font-normal "
                      onClick={() => handleSaveClick(index)}
                    >
                      save
                    </button>
                  ) : (
                    <button
                      className=" bg-teal-400 border-none rounded-lg h-5  gap-10 "
                      onClick={() => handleEditClick(index, item.name)}
                    >
                      <AiOutlineForm />
                    </button>
                  )}

                  <button
                    className="  border-none rounded-lg h-5 w-5  "
                    onClick={() => {
                      deleteT(index);
                    }}
                  >
                    <AiFillDelete />
                  </button>
              
              </div>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : null;
};

export default Todolist;
