import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';

function Header (){
    return(
        <div className='header'>
            <IconButton >
            <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
            <IconButton >
            <img
            className='header__logo'
            src='https://previews.123rf.com/images/glopphy/glopphy1707/glopphy170700031/82240324-heart-love-teamwork-united-people-business-card-icon-logo-vector-image.jpg'  alt='devmeetlogo'/>
            </IconButton>
            <IconButton >
            <QuestionAnswerIcon className="header__icon" fontSize='large' />
            </IconButton>
        </div>
    )
}

export default Header;