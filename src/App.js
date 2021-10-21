import { useState } from "react";
import "./App.css";

//function to add a supplied input to a list

const App = () => {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")
 
  const addHandler = () => {
    let newArr = [...tasks]
    newArr.push(input)
    setTasks(newArr)
  }

  const deleteHandler = (index) => {
    let newArr = [...tasks]
    newArr.splice(index, 1)
    setTasks(newArr)
    setInput("")
  }
  


  return (

    <div>
      <h1>To-Do list</h1>

      {tasks.map((task, index) => {
       return(
        <div key = {index} className = "taskWrapper">
        <h2>{task}</h2>
        <button onClick={() => deleteHandler(index)}>Done</button>
        </div>

       ) 
      })}
      <input onChange={(event) => setInput(event.target.value)} type="text" id = "inputBox" />

      <button onClick={addHandler}>Add a Task</button>
    </div>
  )};

  

export default App;