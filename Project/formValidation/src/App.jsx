import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FormPage from "./Components/FormPage";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <h1 style={{textAlign:"center"}}>Form</h1>
      <FormPage />
    </>
  );
}

export default App;