import React from 'react'

const CityRow = (props) => {
  return (
    <div className="citylist-item">
        <p>{props.cityName}</p>
        <p>{props.temp}<sup>o</sup>C</p>
    </div>
  )
}

export default CityRow