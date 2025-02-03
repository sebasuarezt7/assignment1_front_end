import { useState } from "react";
import TaskManager from "./mainPage";


//here is the main funciton that display the main page(taskmanager)
export default function Home() {
  const [showMain, setShowMain] = useState(false);
  function handleClick(){
    setShowMain(true)
  }
  function newTask(){
    return(
      <h1></h1>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {showMain ? (<TaskManager />) : (
        <>
          <h1 style={{ fontSize: "2em" }}>
            Welcome to Task Manager, click the button to enter:
          </h1>
          <button onClick={handleClick}>Click me</button>
      </>
      )}
    </div>
  );
}
