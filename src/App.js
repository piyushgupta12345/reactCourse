import Header from "./components/Header";
import './App.css'
import { useState, useEffect } from "react";

function App() {

  const [state, setState] = useState(2);
  // const [state2, setState2] = useState(0);
  const [data, setData] = useState([]);


  useEffect(()=>{
    async function getData() {
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);

      const res = await get.json()
      setData(res)
      // console.log(res)
    }

    getData();

    document.title = `(${state} wow)`;

  },[state])

  // console.log("Function Body");

  return (
    <div className="App">
      <Header />
      <button onClick={()=>setState(state + 1)}>Click Me {state}</button>
      {/* <button onClick={()=>setState2(state2 + 1)}>Click Me {state2}</button> */}
      {
        data.map((element, index)=>{
          return(
            <div className="key" key={index}>
              <h4>{element.firstName}</h4>
              <h4>{element.lastName}</h4>
              <h4>{element.email}</h4>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
