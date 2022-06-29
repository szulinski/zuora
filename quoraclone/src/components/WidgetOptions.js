import React from 'react'
import '../css/WidgetOptions.css'
import lol from '../assets/lol.png'
import gw2 from '../assets/gw2.png'
import tft from '../assets/tft.png'

function WidgetOptions() {
  return (
    <div className = 'widget_contents'>
       <div className = 'widget_content lol'>
        <img 
          src = { lol }
          alt = ''
          />
        <div className = 'widget_contentTitle'>
          <h5>League of Legends</h5>
          <p>The Rift awaits</p>
        </div>
       </div>
       <div className = 'widget_content gw2'>
        <img 
          src = { gw2 }
          alt = ''
          />
        <div className = 'widget_contentTitle'>
          <h5>Guild Wars 2 PvP</h5>
          <p>Stay in the fight, 5 by 5  </p>
        </div>
       </div>
       <div className = 'widget_content tft'>
        <img 
          src = { tft }
          alt = ''
          />
        <div className = 'widget_contentTitle'>
          <h5>Teamfight Tactics</h5>
          <p>A little more tactics in your teamfight</p>
        </div>
       </div>
    </div>
  )
}

export default WidgetOptions