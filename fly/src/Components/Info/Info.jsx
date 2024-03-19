import React from 'react'
import { RxCalendar } from 'react-icons/rx'
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";
function Info() {
  return (
    <div className='info section'>
      <div className='infoContainer container'>
        <div className='titleDiv flex'>
          <h2>Travelle to make memories all around the wrold</h2>
          <button className='btn'>View all</button>
        </div>
        <div className='cardsDiv grid'>
          <div className='singleCard grid'>
            <div className='iconDiv flex'>
              <RxCalendar className='icon'/>
            </div>
            <span className='cardtitle'>Book $ Relex</span>
            <p>You can also cell airlines from your an book flight tikit!</p>
          </div>
          <div className='singleCard grid'>
            <div className='iconDiv ColarOne flex'>
              <BsShieldCheck className='icon'/>
            </div>
            <span className='cardtitle '>Smart Check List</span>
            <p>You can also cell airlines from your an book flight tikit!</p>
          </div>
          <div className='singleCard grid'>
            <div className='iconDiv ColarTwo flex'>
              <BsBookmarkCheck className='icon'/>
            </div>
            <span className='cardtitle'>Save More</span>
            <p>You can also cell airlines from your an book flight tikit!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
