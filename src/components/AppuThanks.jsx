import React,{useContext, useRef,useState} from 'react'
import './Appu.css'
import { LocaleContext } from '../App'
import { useNavigate } from 'react-router-dom'
function AppuThanks() {
     const navigate = useNavigate();
     const locale = useContext(LocaleContext)
     const Gostart = ()=>{
        navigate('/')
     }
  return (
    <div className='appu_container'>
        <h1>{locale.personName}</h1>
        <div className='appu_contant'>
            {locale.thanks}
        </div>
           <div className='appu_control'>
            <button className="button_yes"  onClick={Gostart}> {locale.goHome} </button>
           
        </div>
    </div>
  )
}

export default AppuThanks