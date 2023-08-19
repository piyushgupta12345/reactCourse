import React, { useContext } from 'react';
import { AppState } from '../App';

const ComC = () => {

  const AppData = useContext(AppState);

  return (
    <div className='comC'>
      <div>ComC</div>
      <h1>Name:{AppData.name.name}</h1>
      <h1>Age:{AppData.name.age}</h1>
    </div>
  )
}

export default ComC
