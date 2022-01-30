import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import IconButton from '@mui/material/IconButton';

function Header(){
    return(
        <div className="Header">
            {/*IconButton imported from MUI to make an overlay on the header buttons*/}
            <IconButton>
            <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
           <img 
              className="Header__logo"
              src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png" 
              alt="tinder-logo" 
            />

           <IconButton>
               <ChatBubbleIcon className="header__icon" fontSize="large"/>
           </IconButton>
        </div>
    )

}
export default Header
