import './App.css';
import Header from './components/Header';
import ComA from './components/ComA';
import { useState, createContext } from 'react';

const AppState = createContext();

function App() {

    const [data, setData] = useState("Piyush");
    const [name, setName] = useState({name:"Pgl",age:21});

    return (
        <AppState.Provider value={{data,name}}> 
            <Header />
            <ComA />
        </AppState.Provider>
    )
}

export default App;
export {AppState};
