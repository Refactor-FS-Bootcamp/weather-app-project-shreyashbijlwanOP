import React from 'react'
import CityDisplay from './CityDisplay'
import CitySelect from './CitySelect'

const CityContent = () => {
  return (
    <div className='city-content'>
        <CitySelect />
        <CityDisplay />
    </div>
  )
}

export default CityContent