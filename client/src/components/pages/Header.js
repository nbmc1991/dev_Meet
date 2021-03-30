import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';
import {Link, useHistory} from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Icon } from '@material-ui/core';

function Header ({ backButton }){
    const history = useHistory();
    return(
        <div className='header'>
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize='large' className='header__icon' />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className='header__icon' fontSize='large' />
                </IconButton>
            )}
            {/* <IconButton >
            <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton> */}
            <Link to='dashboard'>
            <IconButton >
            <img
            className='header__logo'
            src='https://previews.123rf.com/images/glopphy/glopphy1707/glopphy170700031/82240324-heart-love-teamwork-united-people-business-card-icon-logo-vector-image.jpg'  alt='devmeetlogo'/>
            </IconButton>
            </Link>
            <Link to='/chat'>
            <IconButton >
            <QuestionAnswerIcon className="header__icon" fontSize='large' />
            </IconButton>
            </Link>
        </div>
    )
}

export default Header;