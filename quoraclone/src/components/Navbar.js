import React, { useState } from 'react';
import titleImg from '../assets/zuoratitle.png';
import { HomeOutlined, LanguageOutlined, AssignmentTurnedInOutlined, PeopleOutlined, CommentOutlined, NotificationsActiveOutlined, SearchOutlined, PeopleAltOutlined, ExpandMore, LinkOutlined } from '@mui/icons-material';
import { Avatar, Button, Input } from '@mui/material';
import '../css/Navbar.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../Firebase';
import Modal from 'react-modal'

function Navbar() {
    const user = useSelector(selectUser)
    const [openModal, setOpenModal] = useState(false);

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
                    <Button className = 'button' onClick = {() => setOpenModal(true)}> 
                        <text className = 'text'> Add Question </text> 
                    </Button>
                    <Modal
                        className = 'modal' 
                        isOpen = { openModal }
                        onRequestClose = {() => setOpenModal(false)}
                        
                        >
                        <div className = 'modal_title'>
                            <h5>Add Question</h5>
                            <h5>Share Link</h5>
                            <div className = 'modal_info'>
                                <Avatar
                                className = 'modal_avatar'
                                src = {user.photo}
                                />
                                <p>{ user.displayName ? user.displayName : user.email} asked </p>
                                <div className = 'modal_scope'>
                                    <PeopleAltOutlined />
                                    <p>Public</p>
                                    <ExpandMore />
                                </div> 
                            </div>
                            <div className = 'modal_field'>
                                <Input className = 'input'
                                    type = "text"
                                    placeholder = 'Start your question with "What", "How", "Why", etc'
                                />   
                                <div className = 'modal_field_link'>
                                    <LinkOutlined />
                                 <Input className = 'input'
                                      type = "text"
                                     placeholder = 'Optional: include a link that gives context'
                                 />   
                                </div>
                            </div>
                            <div className = 'modal_buttons'>
                                <button type = 'submit' className = 'add'>Add Question</button>
                            </div>
                            <button onClick = {() => setOpenModal(false)}>Close</button>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Navbar