import React, {useState} from 'react'
import { SiderWrapper } from './sider-style'
import { Link} from 'react-router-dom'

const SiderTab = (props)=>{
    
    const {link, name, customStyle, handleClick} = props

    return(
        <Link to={link}><li style = {customStyle} className = 'sider-content' onClick={handleClick}>{name}</li></Link>
    )

    
}

const Sider = () => {
    const [act, setAct] = useState('home')

    const customStyle = {

        styleHome: {
            backgroundColor: act==='home'?'yellow':'',
            color: act==='home'?'black':'black'
        },

        styleCity: {
            backgroundColor: act==='cities'?'yellow':'',
            color: act==='cities'?'black':'black'
        }
        
    }

    const clickHome = ()=>{
        return setAct('home')
    }

    const clickCity = ()=>{
        return setAct('cities')
    }

    return (
    <>
        <SiderWrapper>          
            <ul>
                <SiderTab link = '/' name = 'Home' customStyle = {customStyle.styleHome} handleClick = {clickHome} />
                <SiderTab link = 'cities' name = 'cities' customStyle = {customStyle.styleCity} handleClick = {clickCity} />
            </ul>
          
        </SiderWrapper>
    </>
    )
}

export default Sider;