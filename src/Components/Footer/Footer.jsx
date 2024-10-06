import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <p className='footerTop'>Free Movie & Series Details by Cineflix</p>
      <div className="footerText">
        <p>Disclamer:  All information provided is for entertainment purposes only.We do not guarantee the accuracy of the information provided.Please use your own discretion when using this information.Thankyou for visiting us</p>
        <p style={{textAlign:'center',marginTop:'3rem',color:'#fff6'}}>Designed & developed by Akshit Sisodiya</p>
      </div>
      <p className='copyright'>Copyright 2024 <i className="fa-solid fa-minus"></i> All Rights Reserved</p>
    </div>
  )
}

export default Footer