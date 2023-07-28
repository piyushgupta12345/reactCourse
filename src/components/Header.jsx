import React from 'react'
import {Link} from "react-router-dom";


function Header() {
  return (
    <div className="App">
      <Link to={'/about'}><h1>About</h1></Link>
      <Link to={'/contact'}><h1>Contact</h1></Link>
    </div>
  )
}

export default Header
