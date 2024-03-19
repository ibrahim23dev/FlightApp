import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import logo from '../../asseats/img/logo.png';

function Footer() {
  return (
    <div className='footer'>
      <div className='sectionContainer container grid'>
        <div className='gridOne'>
          <div className='logoDiv'>
            <img src={logo} className='logo'/>
          </div>
          <p>Your Mind Should be stronger than your feelings,fly!</p>
          <div className='socialIcon flex'>
            <FaFacebookF className='icon' />
            <FaSquareXTwitter className='icon' />
            <FaInstagramSquare className='icon' />
             <FaLinkedin className='icon'/>
          </div>
        </div>
        <div className='footerLink'>
          <span className='linkTitle'>Information</span>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>Explore</a></li>
           <li><a href='/'>Flight Status</a></li>
            <li><a href='/'>Travel</a></li>
             <li><a href='/'>Check In</a></li> <li><a href='/'>Manage Your Booking</a></li>
        </div>

            <div className='footerLink'>
          <span className='linkTitle'>Quick Guide</span>
          <li><a href='/'>FAQ</a></li>
           <li><a href='/'>How to</a></li>
            <li><a href='/'>Features</a></li>
          <li><a href='/'>Baggage</a></li> <li><a href='/'>Route Map</a></li>
          <li><a href='/'>Baggage</a></li> <li><a href='/'>Our Communities</a></li>
        </div>
      </div>
      <div className='copyRightDiv flex'>
        <p>CodeDir || Develop by Mohammad Ibrahim</p>
      </div>
      
    </div>
  )
}

export default Footer
