import React from 'react'

const Tab = (props) => {
    const {name,active,HandleClick} = props
  return (
    <div className='tab' style={active && active} onClick ={()=>{HandleClick(name)}} >{name}</div>
  )
}

export default Tab