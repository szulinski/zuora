import React from 'react'
import '../css/Widget.css'
import WidgetOptions from './WidgetOptions'

function Widget() {
  return (
    <div className = 'widget'>
      <div className = 'widget_header'>
        <h5>Gamespaces to follow</h5>
      </div>
        <WidgetOptions />
    </div> 
  )
}

export default Widget