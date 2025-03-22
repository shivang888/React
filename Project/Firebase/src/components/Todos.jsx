import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null); // State to track which todo is being edited
  const [editedText, setEditedText] = useState(""); // State for the edited text
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/");
      return;
    }
    const getTodos = async () => {
      const querySnapshot = await getDocs(collection(db, "todos"));
      const todosData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setTodos(todosData);
    };

    getTodos();
  }, [navigate]);

  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo) return;
    // Add the new todo to Firestore
    const docRef = await addDoc(collection(db, "todos"), {
      text: newTodo,
      userId: auth.currentUser.uid,
    });

    // Add the new todo to the state directly
    setTodos((prevTodos) => [
      ...prevTodos,
      { text: newTodo, userId: auth.currentUser.uid, id: docRef.id },
    ]);

    // Reset the input field
    setNewTodo("");
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (todo) => {
    setEditingTodo(todo.id); // Set the todo being edited
    setEditedText(todo.text); // Set the current text of the todo
  };

  const saveEditedTodo = async (e) => {
    e.preventDefault();
    if (!editedText) return;

    const todoRef = doc(db, "todos", editingTodo);
    await updateDoc(todoRef, {
      text: editedText,
    });

    setTodos(todos.map((todo) =>
      todo.id === editingTodo ? { ...todo, text: editedText } : todo
    ));

    setEditingTodo(null); // Reset editing state
    setEditedText(""); // Clear the edited text field
  };

  return (
    <div style={{width:"40%" , margin:"auto"}}>
      <h2>Your Todo List</h2>
      
      {/* Input for adding new todo */}
      <input 
        type="text"
        placeholder="New Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button><br /><br /><br /><br />

      {/* If editing, show input to edit todo */}
      {editingTodo && (
        <form  style={{margin:"0px 0px 20px 0px"}} onSubmit={saveEditedTodo}>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      )}

      <ul>
        {todos.map((todo) => (
          <li style={{height:"70px" , width:"100%"}} key={todo.id}>
            {todo.text} 
            <button style={{float:"right" , width:"30%"}} onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button style={{marginRight:"20px",float:"right" ,width:"30%"}} onClick={() => editTodo(todo)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
