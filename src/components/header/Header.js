import React from 'react';
import "../header/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
                <div className="header__search">
                    <SearchIcon  className="header__searchIcon"/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={SmsIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://bit.ly/3nQtot4" title="me"/>
            </div>
        </div>
    )
}

export default Header;
