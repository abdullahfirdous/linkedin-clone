import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption'

// importing icons

import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import TextsmsIcon from '@mui/icons-material/Textsms'
import NotificationsIcon from '@mui/icons-material/Notifications'

import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import { logout } from './features/userSlice'

function Header() {
    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
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
                <HeaderOption avatar={true} title='Me' onClick={logoutOfApp} />
            </div>
        </div>
    )
}

export default Header
