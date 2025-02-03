import { useState } from "react";

//This is the home page
function HomePage({ handleClick }) {
  return (
    <>
      <h1 style={{ fontSize: "2em" }}>
        Press the button to start adding tasks
      </h1>
      <button onClick={handleClick}>Enter</button>
    </>
  );
}

// This is a component to show the tasks
function ShowList({ tasks }) {
  return tasks.map((task, index) => (
    <li key={index}>
      {task} 
    </li>
  ));
}
//This is the main function of the mainPage
export default function TaskManager() {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showHome, setShowHome] = useState(true); 
  const [tasks, setTasks] = useState([""]); 
  const [newTask, setNewTask] = useState(""); 

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div className="body">
      {/* NAVBAR */}
      <nav>
        <ul>
          <li>
            <a
              onClick={() => {
                setShowHome(true);
                setShowAboutUs(false);
              }}
              href="#"
            >
              Home Page
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setShowAboutUs(true);
                setShowHome(false);
              }}
              href="#"
            >
              About Task Manager
            </a>
          </li>
        </ul>
      </nav>

      {/* if showHome is true, show home page */}
      {showHome ? (
        <HomePage handleClick={() => setShowHome(false)} />
      ) : showAboutUs ? (
        <div className="about">
          <h1>About Task Manager</h1>
          <p>This is a simple task manager application.</p>
          <button onClick={() => setShowAboutUs(false)}>Back</button>
        </div>
      ) : (
        //If is not in "About us" and home, show the task manager
        <main>
          <h1>Task Manager</h1>
          <div className="container">
            <h1>What's your plan for today?</h1>
            <div className="input-container">
              <input
                type="text"
                placeholder="Add a new task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button onClick={addTask}>Add</button>
            </div>
            <ul className="Task">
              <ShowList tasks={tasks} />
            </ul>
          </div>
        </main>
      )}
    </div>
  );
}
