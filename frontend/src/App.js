import React,{useState} from 'react'
import List from './Components/List';
import { baseURL } from './utils/Constant';
import { useEffect } from 'react';
import axios from "axios"

const App = () => {



  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => {
      console.log(res.data);
      setTasks(res.data);
    });
  }, []);

  const addTask = () => {
    axios.post(`${baseURL}/add`, { task: input }).then((res) => {
      console.log(res.data);
      setInput("");
    });
  };


  return (
    <main>
   <h1 className='title'>CRUD Operations</h1>

   <div className="input_holder">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={addTask
        }>
          Add Task
        </button>
      </div>
<ul>
  <List/>
</ul>

   </main>
  )
}
export default App;