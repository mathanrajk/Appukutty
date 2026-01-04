import React,{useContext, useRef,useState} from 'react'
import {contentsite } from "../util/content"
import './Appu.css'
import { useNavigate } from 'react-router-dom'
import { LocaleContext } from '../App'

function Appu() {
    const locale = useContext(LocaleContext)
    const noBtnRef = useRef(null);
    const navigate = useNavigate();
    const [isLiked, setIsLiked] = useState(false);
    const handleYes = ()=>{
       setIsLiked(true);
        setTimeout(() => {
               setIsLiked(false);
        },500);
        setTimeout(() => {
            navigate('/appu2');
        }, 800);
    }
    const MoveOver = ()=>{
        if(noBtnRef.current){
            const maxX = window.innerWidth - 500;
            const maxY = window.innerHeight - 500;
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);
            noBtnRef.current.style.position = "fixed";
            noBtnRef.current.style.left = `${randomX}px`;
            noBtnRef.current.style.top = `${randomY}px`;
        }
    }
  return (
    <div className='appu_container'>
        {isLiked && <div className="insta_heart">❤️</div>}
        <h1>{locale.personName}</h1>
        <div className='appu_contant'>
            {locale.q1}
        </div>
        <div className='appu_control'>
            <button className={`button_yes ${isLiked ? 'clicked' : ''}`} onClick={handleYes}> {locale.yes} </button>
            <button className='button_no' ref={noBtnRef} onMouseOver={MoveOver} onTouchStart={MoveOver}> {locale.no} </button>
        </div>
    </div>
  )
}

export default Appu