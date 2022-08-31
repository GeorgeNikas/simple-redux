import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, logging } from "./actions/index";
import "./index.css";

function App() {
  const [nameButton, setNameButton] = useState("Show Counter");

  const hideButtonHandler = () => {
    if (nameButton === "Show Counter") {
      setNameButton("Hide Counter");
    } else {
      setNameButton("Show Counter");
    }
  };
  const count = useSelector((state) => state.count);
  const log = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
      {log && <h1>Counter Value: {count}</h1>}
      {log && <h3>Hit the +/- buttons to count!</h3>}
      {log && <button className="plus" onClick={() => dispatch(increment(1))}>+</button>}
      {log && <button className="minus" onClick={() => dispatch(decrement(1))}>-</button>}
      </div>
      <span>
      <button className="bigButton" onClick={() => dispatch(logging()) && hideButtonHandler()}>
        {nameButton}
      </button>
      </span>
    </div>
  );
}

export default App;

//My app
