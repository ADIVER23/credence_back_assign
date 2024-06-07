import React, { useEffect, useState } from "react";
import List from "./components/List";
import axios from "axios";
import { baseURL } from "./utils/constant";

const App = () => {
	const [input, setInput] = useState("");
	const [tasks, setTasks] = useState([]);
	const [updateUI, setUpdateUI] = useState(false);
  const [updateID,setUpdateID] = useState(null);
	useEffect(() => {
		axios.get(`${baseURL}/get`).then((res) => {
			console.log(res.data);
			setTasks(res.data);
		});
	}, [updateUI]);

	const addTask = () => {
		axios.post(`${baseURL}/save`, { name: input }).then((res) => {
			console.log(res.data);
			setInput("");
      setUpdateUI((prevState) => !prevState)
		});
	};

  const updateMode =(id,text) =>{
    console.log(text);
    setInput(text);
    setUpdateID(id)
  };

  const updateTask = () =>{
    axios.put(`${baseURL}/update/$[updateID]`,{name:input}).then((res)=>{
    console.log(res.data);
  setUpdateUI((prevState) => !prevState)
  setUpdateID(null);
  setInput("");
  })
}

	return (
		<main>
			<h1 className="title">CRUD OPERATION</h1>
			<div className="input_holder">
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>

				<button type="submit" onClick={updateID ? updateTask : addTask}>
					{updateID ? "Update Task":"Add Task"}
				</button>
			</div>

			<ul>
				{tasks.map((task) => (
					<List
						key={task._id}
						id={task._id}
						task={task.name}
						setUpdateUI={setUpdateUI}
            updateMode={updateMode}
					/>
				))}
			</ul>
		</main>
	);
};

export default App;
