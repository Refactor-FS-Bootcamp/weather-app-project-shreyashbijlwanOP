import React from 'react'

const Button = (props) => {
    const {handleClick} = props
  return (
    <button onClick={handleClick}  className="btn" >Add New City</button>
  )
}

export default Button