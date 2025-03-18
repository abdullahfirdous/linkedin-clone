import React from 'react'
import './App.css'
import HeaderOption from './HeaderOption'

// importing icons

import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import TextsmsIcon from '@mui/icons-material/Textsms'
import NotificationsIcon from '@mui/icons-material/Notifications'

function Header() {
    const logoutOfApp = () => {
        dispatchEvent(logout())
        AuthenticatorAssertionResponse.signOut()
    }

    return (
        <div className='header'>
            <div className='header__left'>
                <img
                    src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
                    alt='Linkedin_Icon'
                />

                <div className='header__search'>
                    <SearchIcon />
                    <input type='text' placeholder='Search' />
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={TextsmsIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption
                    avatar='https://media.licdn.com/dms/image/v2/D4D03AQEU4EmC…eta&t=d70xNWz9qS5g_k9GsPPsUp06Tb4CXLXv3jwAtMIRMr8'
                    title='Me'
                    onClick={logoutOfApp}
                />
            </div>
        </div>
    )
}

export default Header
