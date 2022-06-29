import { Avatar } from '@mui/material'
import hourglass from '../assets/hourglass.png'
import React from 'react'
import '../css/Post.css'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutline, MoreHorizOutlined, RepeatOutlined, ShareOutlined } from '@mui/icons-material'

function Post() {
  return (
    <div className = 'post'>
        <div className = 'post_info'>
            <Avatar />
            <h5>Username</h5>
            <small>Timestamp</small>
        </div>
        <div className = 'post_body'>
            <div className = 'post_question'>
                <p>Question</p>
                <button className = 'post_answer_button'>Answer</button>
            </div>
            <div className = 'post_answer'>
                <p></p>
            </div>
            <img src = { hourglass }
                alt = ''/>
        </div>
        <div className = 'post_footer'>
            <div className = 'post_footer_action'>
               <ArrowUpwardOutlined />
               <ArrowDownwardOutlined />
            </div>
            <RepeatOutlined />
            <ChatBubbleOutline />
            <div className = 'post_footer_left'>
                <ShareOutlined />
                <MoreHorizOutlined />
            </div>
        </div>
    </div>
  )
}

export default Post