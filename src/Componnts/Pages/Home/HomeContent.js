import React from 'react'
import Cards from './Cards'
import HomeHeader from './HomeHeader'

const HomeContent = () => {
  return (
    <div className='home-content'>
        <HomeHeader  />
        <Cards />
    </div>
  )
}

export default HomeContent