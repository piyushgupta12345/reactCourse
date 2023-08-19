import './App.css';
import Header from './components/Header';
import { useReducer } from 'react';

const reducer = (state, action) => {
    /*console.log("state: ", state);
    console.log("action: ", action);
    return state;*/
    if (action.type === 'Inc') {
        return state + 3;
    } else if(action.type === 'Dec') {
        return state - 3;
    } else if(action.type === 'Mul') {
        return state * 3;
    }  
    return state;
}

function App() {

    const[state, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <Header />
            <h3>{state}</h3>
            <button onClick={()=> dispatch({type:"Inc"})}>Increment</button>
            <button onClick={()=> dispatch({type:"Dec"})}>decrement</button>
            <button onClick={()=> dispatch({type:"Mul"})}>multiply</button>
        </>
    )
}

export default App;
