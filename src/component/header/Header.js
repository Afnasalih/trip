import React from 'react'
import './Header.css'


export default function Header() {
  return (
    <>
    <div className='top'>
      <div className='left'>
        <div className='l1'>
          <img src='https://cdn-icons-png.flaticon.com/512/535/535239.png' alt='' className='loc'/>
          <div className='loctext'>chennai</div>
        </div>
        <div className='l1'>
        <img src='https://static.vecteezy.com/system/resources/previews/020/009/614/non_2x/email-and-mail-icon-black-free-png.png' alt='' className='loc'/>
        <div className='loctext'>abc@gmail.com</div>
        </div>
        <div className='l1'>
        <img src='https://www.iconpacks.net/icons/1/free-phone-icon-1-thumb.png' alt='' className='loc'/>
        <div className='loctext'>+91 1234 5678</div>
        </div>
      </div>
      <div className='right'>
        <div className='r1'>
          <img src='https://static.vecteezy.com/system/resources/previews/023/986/521/non_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png'className='soc'></img>
          <img src='https://static.vecteezy.com/system/resources/previews/023/986/521/non_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png'className='soc'></img>
          <img src='https://static.vecteezy.com/system/resources/previews/023/986/521/non_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png'className='soc'></img>
        </div>
      </div>
    </div>
     <div className='header'>
      <div className='logo'>
        LOGO
      </div>
      <div className='nav'>
        <div className='navm'>
          <div className='d1'>
            Home
          </div>
          <div className='d1'>
            Top Destination
          </div>
          <div className='d1'>
            Package
          </div>
          <div className='d1'>
            Blog
          </div>
          <div className='d1'>
            About
          </div>
        </div>
      </div>
      <div className='contact'>
        <button className='btn'>contact US</button>
      </div>
      
    </div>
    </>
   
  )
}
