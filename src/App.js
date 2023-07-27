import Header from "./components/Header";
import './App.css'
import { useState } from "react";

function App() {

  const [num, setNum] = useState(1)

  
  const incre = () =>{
    setNum(num + 1)
  }

  const decre = () =>{
    setNum(num - 1)
  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        <h2 className="heading">{num}</h2>
        <div className="buttons">
          <button className="btn" onClick={incre}>increment</button>
          <button className="btn" onClick={decre}>decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
