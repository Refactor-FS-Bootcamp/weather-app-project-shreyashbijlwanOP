import React from 'react'
import Button from '../../Button'
import HeaderStyle from './style'
const Header = (props) => {
    function HandleClick()
    {
        console.log("you CLicked the Button")
    }
    const {title} = props
  return (
    <header style={HeaderStyle}>
       <h1>{title}</h1>
       <Button handleClick = {HandleClick}/>
    </header>
  )
}

export default Header