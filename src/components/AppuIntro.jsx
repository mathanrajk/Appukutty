import React,{useContext, useRef,useState} from 'react'

import './Appu.css'
import { useNavigate } from 'react-router-dom'
import { LocaleContext } from '../App'
function AppuIntro() {
 const locale = useContext(LocaleContext)
    const navigate = useNavigate();
    const handleYes = ()=>{
       navigate('/appu1');
    }
  return (
    <div className='appu_container'>
        <h1>{locale.personName}</h1>
        <div className='appu_contant'>
            {locale.personContant}
        </div>
        <div className='appu_control'>
            <button className='button_yes' onClick={handleYes}> {locale.yes + " ➡️"} </button>
        </div>
    </div>
  )
}

export default AppuIntro