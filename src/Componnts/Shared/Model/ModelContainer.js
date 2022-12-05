import React from 'react'
import ModelHeader from './ModelHeader'
import ModelList from './ModelList'
import ModelSearch from './ModelSearch'

const ModelContainer = () => {
  return (
    <div className='model-container'>
        <ModelHeader />
        <ModelSearch />
        <ModelList/>
    </div>
  )
}

export default ModelContainer