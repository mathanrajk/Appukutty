import { useState } from 'react'
import './App.css'
import Appu from './components/Appu'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AppuIntro from './components/AppuIntro'
import Appu1 from './components/Appu1'
import Appu2 from './components/Appu2'
import Appu3 from './components/Appu3'
import Appu4 from './components/Appu4'
import Appu5 from './components/Appu5'
import Appu6 from './components/Appu6'
import Apputhanks from './components/Apputhanks'
import { createContext } from 'react'
import{contentsite} from './util/content'

export const LocaleContext = createContext();
function App() {
 
const [locale,setlocale] = useState(false);
const localeHandle= ()=>{
  setlocale(!locale)
}
const currentLocale = locale ? 'ml' : 'en';
const content = contentsite[currentLocale];

  return (
    <LocaleContext.Provider value={content}>

    <div className='main_container'>
   <div className='lang_container'>
  <p className='lang_label'>Language: </p>
  <button 
    className={`lang_btn ${locale ? 'ml_active' : 'en_active'}`} 
    onClick={localeHandle}
  >
    {!locale ? "English 🇺🇸" : "മലയാളം 🇮🇳"}
  </button>
</div>
      <Router>
        <Routes>
          <Route path='/' element={<AppuIntro />}></Route>
          <Route path='/appu1' element={<Appu />}></Route>
          <Route path='/appu2' element={<Appu1 />}></Route>
          <Route path='/appu3' element={<Appu2 />}></Route>
          <Route path='/appu4' element={<Appu3 />}></Route>
          <Route path='/appu5' element={<Appu4 />}></Route>
          <Route path='/appu6' element={<Appu5 />}></Route>
          <Route path='/appu7' element={<Appu6 />}></Route>
          <Route path='/appu8' element={<Apputhanks/>}></Route>
        </Routes>
      </Router>

    </div>
    </LocaleContext.Provider>

  )
}

export default App
