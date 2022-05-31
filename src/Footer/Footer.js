import React from 'react'

function Footer() {
  return (
    <div id='Suri'>
        <div className='mt-1 ms-3'>
            <h1>Company</h1>
            <h3>About us</h3>
            <h3>Team</h3>
            <h3>Careers</h3>
        </div>
        <div className='mt-1 ms-2'>
            <h1>Contact</h1>
            <h3>Help & Support</h3>
            <h3>Partner with us</h3>
            <h3>Ride with us</h3>
        </div>
        <div className='mt-1 ms-2'>
           <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv' alt='' className='mt-1' /><br /> 
           <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt='' className='mt-1'/>
        </div>
    </div>
  )
}

export default Footer