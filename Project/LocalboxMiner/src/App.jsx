import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );
  const [boolean, setBoolean] = useState(false);
  const [todoIndex, setTodoIndex] = useState("");

  function handleSubmit() {
    setTodolist([...todolist, inputText]);
    setInputText("");
  }

  function handleDelete(id) {
    let filterData = todolist.filter((_, i) => i !== id);
    setTodolist(filterData);
  }

  function handleEdit(index) {
    setInputText(todolist[index]);
    setTodoIndex(index);
    setBoolean(true);
  }

  function handleUpdate() {
    let updateData = todolist.map((element, i) => (i === todoIndex ? inputText : element));
    setTodolist(updateData);
    setInputText("");
    setBoolean(false);
  }

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-6">
      <h1 className="text-4xl font-extrabold text-white mb-6">Todo List</h1>
      <div className="flex gap-3 mb-6 w-full max-w-lg">
        <input
          type="text"
          placeholder="Enter your task"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 border border-gray-300 p-3 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        {boolean ? (
          <button onClick={handleUpdate} className="bg-yellow-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition-all">Update</button>
        ) : (
          <button onClick={handleSubmit} className="bg-green-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-green-600 transition-all">Add</button>
        )}
      </div>
      <div className="w-full max-w-lg bg-white p-5 rounded-xl shadow-xl">
        {todolist.length === 0 ? (
          <p className="text-center text-gray-500">No tasks added yet.</p>
        ) : (
          todolist.map((element, index) => (
            <div key={index} className="flex justify-between items-center p-3 border-b last:border-none hover:bg-gray-100 transition-all rounded-lg">
              <p className="text-gray-800 font-medium">{element}</p>
              <div className="flex gap-3">
                <button onClick={() => handleEdit(index)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all">Edit</button>
                <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all">Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
