import React from 'react'
import logo from '../assets/images/logo.png'
import './css/header.css'

const Header = () => {
    return (
        <div>
            <div className='logo'>
                <div className='img'>
                    <img src={logo} alt='compony-logo' className='img-fluid ' /></div>
            </div>
        </div>
    )
}

export default Header
