import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <NavLink to ="/">Home</NavLink>
        <NavLink to ="/Cities">Cities</NavLink>
    </div>
  )
}

export default Sidebar