import React from 'react';
import { IoLocationOutline, IoPersonSharp, IoCalendarOutline } from "react-icons/io5";
import {RxCalendar} from 'react-icons/rx'
function Search() {
  return (
    <div className='search container section'>
      <div className='sectionContainer grid'>
        <div className='btns flex'>
          <div className='singleBtn'>
            <span>Economy</span>
          </div>
          <div className='singleBtn'>
            <span>Business Class</span> {/* Corrected typo */}
          </div>
          <div className='singleBtn'>
            <span>First Class</span>
          </div>
        </div>
        <div className='searchInput flex'>
          <div className='singleInput flex'>
            <div className='iconDiv'>
              <IoLocationOutline className='icon' />
            </div>
            <div className='texts'>
              <h4>Location</h4>
              <input type='text' placeholder='Where do you want to go' />
            </div>
          </div>
          <div className='singleInput flex'>
            <div className='iconDiv'>
              <IoPersonSharp className='icon' />
            </div>
            <div className='texts'>
              <h4>Traveller</h4>
              <input type='text' placeholder='Add Guest' />
            </div>
          </div>
          <div className='singleInput flex'>
            <div className='iconDiv'>
              <RxCalendar className='icon' /> 
            </div>
            <div className='texts'>
              <h4>Check In</h4>
              <input type='text' placeholder='Add date' />
            </div>
          </div>
          <div className='singleInput flex'>
            <div className='iconDiv'>
              <RxCalendar className='icon' /> 
            </div>
            <div className='texts'>
              <h4>Check Out</h4>
              <input type='text' placeholder='Add date' />
            </div>
          </div>
          <button className='btn btnBlock'>
            Search Flight
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
