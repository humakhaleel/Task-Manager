import React, { useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import Todolist from "./Todolist";
import download from "../assets/download.jpg"

function TodoApp() {
  const [task1, setTask] = useState("");
  const [todoList, setTodolist] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
 
  function taskCreate(event) {
    event.preventDefault();
    if (task1 === "") {
      return;
    }
    const newTask = { name: task1, status: false };
    setTodolist((prevTasks) => [...prevTasks, newTask]);
    setTask("");
  }

  const deleteTask = (i) => {
    setTodolist(todoList.filter((task2, index) =>{return index !== i && !task2.completed } )
    )
  };

  const toggleTaskStatus = (i) => {
    setTodolist((prevTasks) =>
      prevTasks.map((task, index) =>
        index === i ? { ...task, status: !task.status } : task
      )
    );
  };

  const getFilteredTasks = () => {
    
    if (filterStatus === "Active") {
      return todoList.filter((task) => !task.status);
    }
    if (filterStatus === "Completed") {
      return todoList.filter((task) => task.status);
    }
    return todoList;
  };
 
  return (
    <>
      <div className="bg-white shadow-md shadow-gray-100 place-self-center w-full max-w-4xl flex flex-col p-3 min-h-[550px] rounded-xl">
        <div className="grid  mt-0  ">       
           <img className="w-20 " src={todo_icon} alt=""/> 
         
          <h1 className=" text-3xl text-black font-bold">To Do List</h1>
          <div >
          <input  type="Date" name="date"/></div>
          
        </div>
        <div className="flex item-center my-7 bg-gray-200 rounded-full">
          <input
            
            className="bg-transparent border-0 outline-none  flex-1 h-14 pl-4 pr-4 placeholder
      :text-gray-600"
            type="text"
            value={task1}
            placeholder="Add your task"
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={taskCreate}
            className=" flex-1 bg-teal-600  hover:bg-teal-800 border-0 rounded-full shadow-md shadow-teal-300 w-3/12 h-14 text-white text-lg font-bold cursor-pointer"
          >
            Add Task
          </button>
        </div>
        
        <div className="flex item-center my-6  rounded-full gap-10">
           
           <button
            className=" bg-teal-600 hover:bg-teal-800 shadow-lg shadow-teal-800 border-none rounded-xl  w-3/12 h-14 text-white text-md font-lg cursor-pointer"
            onClick={() => {
              setFilterStatus("All");
            }}
          >
            All{" "}
          </button>
          <button
            className="bg-cyan-500 hover:bg-cyan-700 shadow-lg shadow-cyan-800 border-none rounded-xl bg-range-600 w-3/12 h-14 text-white text-md font-medium cursor-pointer"
            onClick={() => {
              setFilterStatus("Active");
              }}
            // onClick={() => {
            //   setFilterStatus("Active");
            // }}
          >
            
            Active {" "}
          </button>
          <button
            className=" bg-zinc-400 hover:bg-zinc-600 shadow-lg shadow-zinc-800 border-none rounded-xl bg-range-600 w-3/12 h-14 text-white text-md font-medium cursor-pointer"
            onClick={() => {
              setFilterStatus("Completed");
              }}
            // onClick={() => {
            //   setFilterStatus("Completed");
            // }}
          >
    
            Completed{" "}
          </button> 
        </div>
         {todoList ? (
          <Todolist
            tasks={getFilteredTasks()}
            deleteT={deleteTask}
            taskStatus={toggleTaskStatus}
          />
        ) : null}
       
      </div>
    </>
  );
}

export default TodoApp;
