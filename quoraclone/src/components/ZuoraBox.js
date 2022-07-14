import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import '../css/ZuoraBox.css'
import { selectUser } from '../features/userSlice';

function ZuoraBox() {
  const user = useSelector(selectUser);
  return (
    <div className = 'zuoraBox'>
        <div className = 'zuoraBox_info'>
            <Avatar 
            src = {user.photo} />
            <h5>{user.displayName}</h5>
        </div>
        <div className = 'zuoraBox_zuora'>
            <p>What is your question or link?</p>
        </div>
    </div>
  )
}

export default ZuoraBox