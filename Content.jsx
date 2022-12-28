import React from 'react'
import "./index.css"

const Content = () => {
  return (
    <div>
    <div className='full'>
         <div>
              <h1 className="middle">Let's explore & travel the world</h1>
              <h5 className='para'>Find the best destinations and the most popular stays!</h5>
          </div>
          <div className='contentBorder'>
            <div className='content'>
            <h1>SEARCH FLIGHTS</h1><pre>                                                                                                                                           </pre>
            <input className='rad' type="radio"/>Return  <input className='rad' type="radio"/>One-way
            </div>
            <div className='content1' >
            Departure:<input type="text" placeholder='Singapore(SIN)'/><pre>   </pre>
            Arrival:<input type="text" placeholder='Los Angeles(LA)' /><pre>   </pre>
            Date:<input type="date" name="" id="" /><pre>               </pre>
            <button className='btn'>SEARCH FLIGHTS</button>
            </div>
          </div>
          </div>
            <div>
            <h3>UPCOMING FLIGHT</h3>
            </div>
            <div className='upcoming'>
            <h2>SIN
            <h6>Singapore</h6></h2>
            <img src='https://thumbs.dreamstime.com/b/print-173441630.jpg' id='plane'></img>
            <h2>LAX
            <h6>Los Angeles</h6></h2>
          </div>
</div>
  )
}

export default Content