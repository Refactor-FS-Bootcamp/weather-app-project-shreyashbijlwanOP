import React, {useContext, useState} from 'react'
import AddCity from '../../components/common/cityAdd/AddCity';
import { ContentWrap, HeaderWrap } from './homestyle';
import Button from '../../components/common/Button/Button.js';
// import './home.css'
import 'react-toastify/dist/ReactToastify.css';
import { ContextProvider } from '../../components/context/Context';
import { popups } from '../../components/msg';
import { ToastContainer } from 'react-toastify'

const FavListAdd = ({city, checkClick})=>{
    return(
                    
        <div className='fav-items'>
            <div className='fav-list-header'>
                <h4>{city.name}</h4>
                <input id="star1" className="star" type="checkbox" checked={city.is_checked} onClick={checkClick}/>

            </div>
            <div className='fav-item-cont'>
                    {city.desc}
            </div>
            <div className='fav-item-des'>
                <span>Temperature : </span>{city.temp}<br></br>
                <span>Humidity : </span>{city.humidity}
            </div>
        </div>
    )
}



const Home = ()=>{

    const [show, setShow] = useState(false)
    const {selectedCities, setSelectedCities, cityDesc, setCityDesc, favCities, setFavCities} = useContext(ContextProvider)
    const styleBtn = {
        border: 'none',
        height: '40px',
        width: '150px',
        backgroundColor: '#633ea5',
        color: 'white',
        fontSize: '17px'
    }
    console.log(selectedCities)
    const handleClick = ()=>{
        setShow(prev=>!prev)
    }

    const handlePopup=(close)=>{
        if(!close){
            setShow(false)
        }
    }

    const favCitiesRemove = (cit)=>{
        const city = selectedCities.filter(c=>c.id === cit.id)
        city[0].is_checked = !cit.is_checked
        const slt = selectedCities.filter(ob=>ob !== cit)
        const ob = [...slt, city[0]]
        if(city[0].is_checked===true){
            setFavCities([...favCities, city[0]])
        }
        else{
            const fav = favCities.filter(ob=>ob != city[0])
            setFavCities(fav)
        }
        setSelectedCities(ob) 
    }

    return(
        <div className='home-wrap'>
            <HeaderWrap>
                <div className = 'h1-text'>
                    <h2>My favorite cities</h2>
                </div>
                <div>
                    <Button name = 'Add New City' customStyle = {styleBtn} handleClick = {handleClick} />
                </div>
            </HeaderWrap>

            <ContentWrap>
                <div className='fav-list'>
                {favCities.length === 0?<div className='no-fav'>You haven't selected any favorite cities!</div>:
                
                favCities.map(city=><FavListAdd key={city.name} city = {city} checkClick={()=>favCitiesRemove(city)} />)
                
                }
                </div>
                {
                    show&&<AddCity onClose = {handlePopup}  />
                    
                }
            </ContentWrap>
        </div>
    )  
}

export default Home;