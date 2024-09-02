import React from 'react'
import './About.css'
import PIC1 from "../../assest/a1.jpg"

export default function About() {
    return (
        <div className='about'>
            {/* <div className='abtmid'>
            <div className='abt1'>
                <div className='abthead'>
                    <div className='oghead'>ABOUT US</div>
                <div className='abtdes'>Description on the tour package hfci whnejh owk hwbcfbhew jwen</div>
                </div>
                <div className='abtpic1'>
                    <img src={PIC1} alt='' className='pc1'></img>
                </div>
            </div>
            <div className='abt2'>
                <div className='abtpic2'>
                    <div className='bt2'>
                        <div className='sm1'>
                        <img src={PIC1} alt='' className='pc1'></img>
                        </div>
                        <div className='sm2'>
                        <img src={PIC1} alt='' className='pc1'></img>
                        </div>
                    </div>
                </div>
                <div className='abtpic3'>
                    <div className='orange'>
                    <img src={PIC1} alt='' className='pc1'></img>
                    </div>
                </div>
            </div>
        </div> */}
       
            <div className="album">
            <div className='abtxt'>Visit our Gallery</div>
                <div className="responsive-container-block bg">
                    <div className="responsive-container-block img-cont">
                        <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.4.svg"/>
                            <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.5.svg"/>
                            <img className="img img-last" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.6.svg"/>
                                </div>
                                <div className="responsive-container-block img-cont">
                                    <img className="img img-big" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.11.svg"/>
                                    <img className="img img-big img-last" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.10.svg"/>
                                        </div>
                                        <div className="responsive-container-block img-cont">
                                        <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.7.svg"/>
                                        <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.8.svg"/>
                                        <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.9.svg"/>
                                        </div>
                                                </div>
                                        </div>

                                </div>

                                )
}
