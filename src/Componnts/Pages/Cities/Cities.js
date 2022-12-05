import React from 'react'
import Model from '../../Shared/Model/Model'
import Sidebar from '../../Shared/Sidebar/Sidebar'
import Wrapper from '../../Shared/Wrapper/Wrapper'
import CityContent from './CityContent'

const Cities = () => {
  return (
    <Wrapper>
        <Sidebar />
        <CityContent />
        {/* <Model /> */}
    </Wrapper>
  )
}

export default Cities