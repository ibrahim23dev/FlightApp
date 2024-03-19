import React from 'react'
import plaistain from '../../asseats/img/alaqsa.jpg';
import Makka from '../../asseats/img/mukka.jpg';
import Modina from '../../asseats/img/madina.jpg';
import turkey from '../../asseats/img/Turkey.jpg';

import Traveller1 from '../../asseats/img/men.jpg';
import Traveller2 from '../../asseats/img/traveller.jpg';
import Traveller3 from '../../asseats/img/traveller.jpg';
import Traveller4 from '../../asseats/img/traveller.jpg';

const travellers = [
  {
    id: 1,
    travellerImage:Traveller1,
    destinationImage: plaistain,
    travellerName: 'Fahim',
    socialLink:'@fahim349'
  },
  {
    id: 2,
    travellerImage:Traveller1,
    destinationImage: Makka,
    travellerName: 'Ibrahim',
    socialLink:'@ibrahim640'
  },
  {
    id: 3,
    travellerImage:Traveller1,
    destinationImage: Modina,
    travellerName: 'Imran',
    socialLink:'@imran549'
  },{
    id: 4,
    travellerImage:Traveller1,
    destinationImage: turkey,
    travellerName: 'Khalid',
    socialLink:'@khalid550'
  }
]


function Travellers() {
 

  return (
    <div className='travellers section container'>
      <div className='sectionContainer'>
        <h2>Top Travellers of this month</h2>
        <div className='travellerContainer grid'>
          {
            travellers.map(({id, travellerImage, destinationImage, travellerName, socialLink }) => {
              return (
                <div key={id} className='singletraveller'>
            <img src={destinationImage} alt='' className='destinationImage' />
            <div className='travellerDetails'>
              <div className='travellerImage'>
                <img src={travellerImage} alt=''/>
              </div>
              <div className='travellerName'>
                      <span>{ travellerName}</span>
                      <p>{socialLink}</p>
              </div>
            </div>
          </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Travellers
