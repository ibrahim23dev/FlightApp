import React from 'react'
import Sky from "../../../src/asseats/img/sky.jpg";
import Window from "../../../src/asseats/img/window.jpg";
import Winper from "../../../src/asseats/img/winper.jpg";
function Support() {
  return (
    <div className='support container section'>
      <div className='sectionContainer'>
        <div className='titleDiv'>
          <small>Travelle Support</small>
          <h2>Plan Your Travells with confidance</h2>
          <p>Find help with booking and travelle plans, See What to expet along the journey!</p>
        </div>
        <div className='infoDiv grid'>
          <div className='textDiv grid'>
            <div className='singleInfo'>
              <span className='number'>01</span>
              <h4>Travelle Requirments for Dubai</h4>
              <p>Find help with booking and travelle Plans, See What to expet along the journey!</p>
            </div>
            <div className='singleInfo'>
              <span className='number ColarOne'>02</span>
              <h4>Travelle Requirments for Dubai</h4>
              <p>Find help with booking and travelle Plans, See What to expet along the journey!</p>
            </div>
            <div className='singleInfo'>
              <span className='number ColarTwo'>03</span>
              <h4>Multi Risk Travelle Insurance</h4>
              <p>Find help with booking and travelle Plans, See What to expet along the journey!</p>
            </div>
          </div>

          <div className='imgDiv'>
            <img src={Sky} className='img' />
            <img src={Window} className='img' />
             <img src={Winper} className='img'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
