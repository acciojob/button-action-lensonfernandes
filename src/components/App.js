import React, {Component, useEffect, useState} from "react";
import "./../styles/App.css";

function App() {

  let handleClick = (e) => {setIsVisible(true)}

  useEffect(()=>{}, [isVisible])

  let [isVisible, setIsVisible] = useState(false)
  return (
    <div id="main">
      // Do not alter the main div
     {isVisible && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      <button id="click" onClick={handleClick}>Click me</button>
    </div>
  );
}


export default App;
