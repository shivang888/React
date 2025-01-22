import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white"); 

  function handleColor(newColor) {
    setColor(newColor); 
  }

  return (
    <>
    <div className="mainDiv">
      <div
        id="bgHead"
        className="background-header"
        style={{ background: color }}
      >
        <h1>Click button below to change background</h1>
        <span>and click here again to change to default color</span>
      </div>  

      <div className="btn-grid">
        <button
          id="btn1"
          className="btn btn-tomato"
          style={{ backgroundColor: "red" }}
          onClick={() => handleColor("red")}
        >
          Red
        </button>
        <button
          id="btn2"
          className="btn btn-violet"
          style={{ backgroundColor: "violet" }}
          onClick={() => handleColor("violet")}
        >
          Violet
        </button>
        <button
          id="btn3"
          className="btn btn-wheat"
          style={{ backgroundColor: "wheat" }}
          onClick={() => handleColor("wheat")}
        >
          Wheat
        </button>
        <button
          id="btn4"
          className="btn btn-yellow"
          style={{ backgroundColor: "yellow" }}
          onClick={() => handleColor("yellow")}
        >
          Yellow
        </button>
        <button
          id="btn5"
          className="btn btn-yellowgreen"
          style={{ backgroundColor: "yellowgreen" }}
          onClick={() => handleColor("yellowgreen")}
        >
          Yellowgreen
        </button>
      </div>
      </div>
    </>
  );
}

export default App;
