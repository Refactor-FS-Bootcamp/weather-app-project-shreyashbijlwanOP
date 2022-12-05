import React from 'react'
import CityDisplayContent from './CityDisplayContent'
import CityDisplayHeader from './CityDisplayHeader'

const CityDisplay = () => {
  return (
    <div className='city-display'>
        <CityDisplayHeader />
        <CityDisplayContent />
    </div>
  )
}

export default CityDisplay