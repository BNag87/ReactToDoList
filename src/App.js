//↓↓↓ This is designed to allow the user to write a task, then show it on a browser window. All done with React

import { useState } from "react"; //needed to use react components in functions
import "./App.css"; //stylesheet


const App = () => {
  
  const [tasks, setTasks] = useState([]) //an array that will contain input elements (when a button is clicked)
  const [input, setInput] = useState("") //gets input from an input element from html
 
  //this function is called when a button is clicked. it creates a new array from a spread of the tasks array declared above
  const addHandler = () => {
    let newArr = [...tasks]   //spread the original array in to a new one...
    newArr.push(input)        //...then push whatever the input is into the 'newArr' array...
    setTasks(newArr)          //...finally, it updates the original array with the content of the new one
  }

  //↓ this function is called when a button is clicked. it deletes a component from the render
    //↓ index is passed down from the tasks array
  const deleteHandler = (index) => {
    let newArr = [...tasks]   //← spread tasks array in to a new array...
    newArr.splice(index, 1)   //← remove the element at the index provided
    setTasks(newArr)          //← update the original array with the modified one
    setInput("")              //← clear the input so a new one can be written.
  }
  


  return (

    <div>
      <h1>To-Do list</h1>

    //↓ cant mutate an array in a useStatem so map the array (called task)
      {tasks.map((task, index) => {
       return(
        <div key = {index} className = "taskWrapper">                     //← a div wrapper to contain the component
        <h2>{task}</h2>                                                   
                                                                          //↑ pass the element called task
        <button onClick={() => deleteHandler(index)}>Done</button>        
                                                                          //↑ when this button is clicked, fire the deleteHandler function to remove the components
        </div>

       ) 
      })}
      
      <input onChange={(event) => setInput(event.target.value)} type="text" id = "inputBox" />
        //↑ when the input text is changed, fire the setinput function with the current value

      <button onClick={addHandler}>Add a Task</button>
        //↑ when the button is clicked, fire the 'addHandler' function to add a task

    </div>
  )};

  

export default App;
