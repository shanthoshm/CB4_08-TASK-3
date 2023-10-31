import React from 'react';
import '../index.css';
import logo from '../images/logo.png';

function TopNavBar(){
    return (
        <div className='top-nav-bar'>
            <div className="top-left">
                <div className="top-left-items">
                    <img className="logo" src={logo} alt="bank-logo" />
                </div>
                <div className="top-left-items">
                    <p className="title">Our Bank</p>
                </div>
            </div>
            <div className="top-right">
                <div><a href="#Home-section">Home</a></div>
                <div><a href="#About-section">About</a></div>
                <div><a href="#Services-section">Services</a></div>
                <div><a href="#Contact-section">Contact</a></div>
            </div>
        </div>
    );
}

export default TopNavBar;