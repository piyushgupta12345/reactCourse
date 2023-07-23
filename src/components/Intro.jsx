import React from 'react'
import propTypes from 'prop-types'


// function Intro(props) {
//   return (
//     <>
//       <h2>My name is {props.name}</h2>
//       <h2>I am {props.age} years old</h2>
//       <h2>I am a {props.pro}</h2>
//     </>
//   )
// }

function Intro({name="ayu", age, pro}) {
  return (
    <>
      <h2>My name is {name}</h2>
      <h2>I am {age} years old</h2>
      <h2>I am a {pro}</h2>
    </>
  )
}

Intro.propTypes = {
  name: propTypes.string,
  age: propTypes.string,
  pro: propTypes.string
}

Intro.defaultProps = {
  name: "Piyush",
  age: "20",
  pro: "programmer"
}

export default Intro

