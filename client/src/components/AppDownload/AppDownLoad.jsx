import React from 'react'
import { assets } from '../../assets/assets'
import "./AppDownLoad.css"

const AppDownLoad = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>Foe Better Experience Download <br />FastStore App</p>
        <img className='playStore' src={assets.playStore} alt="" />
        <img className='appStore' src={assets.appStore} alt="" />
    </div>
  )
}

export default AppDownLoad
