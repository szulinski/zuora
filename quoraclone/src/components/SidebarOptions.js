import React from 'react'
import '../css/SidebarOptions.css'
import mtgLogo from '../assets/magic.png'
import esoLogo from '../assets/eso.png'
import smiteLogo from '../assets/smite.png'
import { Add } from '@mui/icons-material'

function SidebarOptions() {
  return (
    <div className = 'sidebarOptions'>
        <div className = 'sidebarOption'>
          <img
            src = { mtgLogo }
            alt =''
          />
        <p>Magic: the Gathering</p>
        </div>
        <div className = 'sidebarOption'>
          <img
            src = { esoLogo }
            alt =''
          />
        <p>The Elder Scrolls Online</p>
        </div>
        <div className = 'sidebarOption'>
          <img
            src = { smiteLogo }
            alt =''
          />
        <p>SMITE</p>
        </div>
        <div className = 'sidebarOption'>
          <Add />
          <p className = 'text'>Discover Games</p> 
        </div>
    </div>
  )
}

export default SidebarOptions