import React from 'react'
import Card from '../../Shared/Card/Card'

const Cards = () => {
  return (
    <div className="home-cards">
        {true? "You have not selected any city as a favorite yet.":<Card cityName="Satpuli" temp={20} humid ={20} />}
    </div>
  )
}

export default Cards