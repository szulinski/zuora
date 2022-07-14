import React from 'react';
import titleImg from '../assets/zuoratitle.png';
import { HomeOutlined, LanguageOutlined, AssignmentTurnedInOutlined, PeopleOutlined, CommentOutlined, NotificationsActiveOutlined, SearchOutlined } from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import '../css/Navbar.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../Firebase';

function Navbar() {
    const user = useSelector(selectUser)

    return (
        <div className = 'navHeader'>
            <div className = "navHeader_logo">
                <img 
                    src = {titleImg}
                    alt = 'title'>
                </img>
            </div>
            <div className = 'navHeader_icons'>
                <div className = 'navHeader_icon_home navHeader_icon'>
                    <HomeOutlined />
                </div>
                <div className = 'navHeader_icon_comments navHeader_icon'>
                    <CommentOutlined />
                </div>
                <div className = 'navHeader_icon_posted navHeader_icon'>
                    <AssignmentTurnedInOutlined />
                </div>
                <div className = 'navHeader_icon_profile navHeader_icon'>
                    <PeopleOutlined />
                </div>
                <div className = 'navHeader_icon_notifs navHeader_icon'>
                    <NotificationsActiveOutlined />
                </div>
                <div className = "navHeader_input">
                    <SearchOutlined />
                    <input type = "text" placeholder = "Search Zuora" />
                </div>
                <div className = 'navHeader_rem'>
                    <div className = 'navHeader_avatar'>
                        <Avatar onClick = {() => auth.signOut()} src = {user.photo} />
                    </div>
                    <LanguageOutlined />
                    <Button className = 'button'> 
                        <text className = 'text'> Add Question </text> 
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Navbar