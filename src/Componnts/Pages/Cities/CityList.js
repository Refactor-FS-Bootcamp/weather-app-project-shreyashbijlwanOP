import React from 'react'
import CityRow from './CityRow'

const CityList = () => {
  return (
    <div className='citylist'>
     {true ? "Not Selected any city yet. ":  <CityRow cityName={"Satpuli"} temp={20} />}
    </div>
  )
}

export default CityList