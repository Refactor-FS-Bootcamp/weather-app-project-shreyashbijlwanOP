import React from 'react'
import Card from './Card'

const Cards = (props) => {
    let { list } = props
  return (
    <div className="cards">
        {list === true ? <Card /> : "You have not selected any city as a favorite yet"  }
    </div>
  )
}

export default Cards