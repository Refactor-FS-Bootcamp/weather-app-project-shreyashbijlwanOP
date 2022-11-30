import React from 'react'
import PlusButton from './Shared/PlusButton'
import Title from './Shared/Title'

const CityHeader = () => {
  return (
    <div className="container" style={{ borderBottom: "1px solid grey",paddingBottom:"10px",alignItems:"center"}}>
        <Title title = "Cities" />
        <PlusButton  />      
    </div>
  )
}

export default CityHeader