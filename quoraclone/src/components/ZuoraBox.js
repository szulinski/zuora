import { Avatar } from '@mui/material';
import React from 'react'
import '../css/ZuoraBox.css'

function ZuoraBox() {
  return (
    <div className = 'zuoraBox'>
        <div className = 'zuoraBox_info'>
            <Avatar />
            <h5>Username</h5>
        </div>
        <div className = 'zuoraBox_zuora'>
            <p>What is your question or link?</p>
        </div>
    </div>
  )
}

export default ZuoraBox