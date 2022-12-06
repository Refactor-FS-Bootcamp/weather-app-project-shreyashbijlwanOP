import React, { useContext, useEffect, useState } from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { popups } from '../../msg';
import './addcitystyle.css'
import Button from '../Button/Button.js'
import { Cities } from '../../city_list';
import { ContextProvider } from '../../context/Context';
import { CityAdder } from './addcity-style';

const AddCity = (props) => {

  const [close, setClose] = useState(false)
  const[searchText, setSearchText] = useState('')
  const {selectedCities, setSelectedCities} = useContext(ContextProvider)
  const {unselectedCities, setUnselectedCities}= useContext(ContextProvider)

  const btnStyle = {
    height: '40px',
    width: '40px',
    fontSize: '20px',
    background: 'none',
    border: 'none',
    color: 'purple'
  }

  const handleIn = (e)=>{
    setSearchText(e.target.value)
    const searchList = Cities.filter(city=>!(selectedCities.includes(city)) && city.name.toLowerCase().includes(e.target.value))
    setUnselectedCities(searchList)
  }



  const modelClose = ()=>{
    const unsel = Cities.filter(city=>!(selectedCities.includes(city)))
    setUnselectedCities(unsel)
    setClose(prev=>!prev)
    props.onClose(close)

  }

  const handleFilter = (city)=>{
    popups('added city')
    if(!selectedCities.includes(city)){
      const selected = [...selectedCities, city]
      setSelectedCities(selected)
      const unselected = unselectedCities.filter(c => c!== city)
      setUnselectedCities(unselected)
    }
  }

  const handlePop = (e)=>{
    if(e.path[0].className === 'city-popup'){
      modelClose()
    }
  }

  useEffect(()=>{
    document.body.addEventListener('click',handlePop)
    return ()=>document.body.removeEventListener('click', handlePop)
  })


  if(close === false){
    return (
      <div className='city-popup'>
        <CityAdder>
          <div className='add-city-header'>
            <h2>Add City Modal</h2>
            <Button name='&#x2715;' customStyle = {btnStyle} handleClick={modelClose} />
          </div>
          <div className='addcity-input'>
            <input placeholder='search cities' onChange={handleIn}/>
          </div>
          <div className='cities-list'>
            <ul>
              {
                unselectedCities.map((city)=><li value={searchText} onClick={()=>handleFilter(city)}>{city.name}<button>&#x2B;</button></li>)
              }
            </ul>
            <ToastContainer />
          </div>
        </CityAdder>
      </div>
    )
  } 
}

export default AddCity;
