import React from 'react'
import Cards from '../../Cards'
import Title from '../Title'
import ContentStyle from './style'

const Content = () => {
  return (
    <section style ={ContentStyle}  className="content">
        <Title title ={"My Favorite Cities"}/>
        <Cards />
    </section>
  )
}

export default Content