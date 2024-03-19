import React from 'react'
import {ReactTyped}  from "react-typed";
import Vedio from '../../asseats/img/vedio.mp4';
import takeOff from '../../asseats/img/takeOff.png';
function Home() {
  return (
    <div className='home flex container'>
      <div className='mainText'>
        <h3>
          <ReactTyped strings={["Welcome To Adbiyas!",
          "Stay Safe and Secure!"]} typeSpeed={40} backSpeed={50} loop />
          </h3>
      </div>
      <div className='HomeImages flex'>
        <div className='vedioDiv'>
       <video src={Vedio} autoPlay muted loop className='vedio'></video>
        </div>
        <img src={takeOff} alt='' className='plane'/>
     </div>
    </div>
  )
}

export default Home
