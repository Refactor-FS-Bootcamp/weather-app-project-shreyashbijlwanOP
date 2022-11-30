import React from 'react'
import ListItem from './ListItem'

const CityContent = (props) => {
    let {list} = props
  return (
    <div className="city-content">
        {list ? <ListItem />:"You have not selected City"}
    </div>
  )
} 

export default CityContent