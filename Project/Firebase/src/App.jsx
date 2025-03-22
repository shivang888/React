// src/App.jsx
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Todos from "./components/Todos";
import Signup from "./components/Signup";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  );
}

export default App;
