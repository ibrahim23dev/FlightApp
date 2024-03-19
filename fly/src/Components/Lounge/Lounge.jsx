import React from 'react'
import sleep from '../../asseats/img/sleep.jpg'
import lexa from '../../asseats/img/lexa.webp';
import look from '../../asseats/img/look.jpg'
function Lounge() {
  return (
    <div className='lounge section container'>
      <div className='sectionContainer grid'>
        <div className='imgDiv'>
          <img src={sleep} alt='' />
          <img src={lexa} alt='' />
          <img src={look} alt=''/>
        </div>
        <div className='textDiv'>
          <h2>Unaccompanied Lounge</h2>
        </div>
        <div className='grids grid'>
          <div className='singleGride'>
            <span className='gridtitle'>Help through the airport</span>
            <p>You can also Cell airlines from your phone and book a flight tikit to one of your favorite destination</p>
          </div>
          <div className='singleGride'>
            <span className='gridtitle'>Priority Boarding</span>
            <p>You can also Cell airlines from your phone and book a flight tikit to one of your favorite destination</p>
          </div>
          <div className='singleGride'>
            <span className='gridtitle'>Chauffeur-drive service</span>
            <p>You can also Cell airlines from your phone and book a flight tikit to one of your favorite destination</p>
          </div>
          <div className='singleGride'>
            <span className='gridtitle'>Chauffeur-drive service</span>
            <p>You can also Cell airlines from your phone and book a flight tikit to one of your favorite destination</p>
          </div>
        </div>
     </div>
    </div>
  )
}

export default Lounge
