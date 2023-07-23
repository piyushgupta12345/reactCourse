import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <h1 className='header'>This is Header</h1>
  )
}

function Header2() {

    const header2 = {
        background: "black",
        fontSize: 20,
        color: "#fff"
    }
  return (
    <h1 className='header2' style={header2}>This is Header2</h1>
  )
}

function Header3() {
    return (
      <h1 className='header3' style={{fontSize: 20, border: "2px solid red"}}>This is Header2</h1>
    )
}

export {Header2, Header3}
export default Header
