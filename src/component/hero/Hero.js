import React from 'react'
import "./Hero.css"
import HeroImg from "../../assest/p1.jpg"
import Header from '../header/Header'

export default function Hero() {
  return (
    <div className='Hero'>
        <img src={HeroImg} alt='' className='himg'></img>
        <div className='header-on-image'>
            <Header/>
        </div>
        <div className='text-on-image'>
           <div className='te1'>
            <div className='tra'>TRAVELLING WITH US</div>
            <div className='des'>In publishing and graphic design, Lorem ipsum is a placeholder text 
            commonly used to demonstrate the visual Lorem ipsum is a placeholder text commonly used in the graphic, print.</div>
            <div className='btu'>
            <button className='click'>Book us</button>
           </div>
           </div>
           
        </div>

    </div>
  )
}
