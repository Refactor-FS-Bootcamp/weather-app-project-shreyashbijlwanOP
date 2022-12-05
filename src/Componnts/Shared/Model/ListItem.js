import React from 'react'
import PlusButton from '../PlusBtn/PlusButton'

const ListItem = (props) => {
  return (
    <div className='model-list-item'>
        <p>{props.cityName}</p>
        <PlusButton />
    </div>
  )
}

export default ListItem