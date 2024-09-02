import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Top.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';


export default function Top() {
    return (
        <><div className='hh'>
            <div className='hh2'>
            <div className='Top'>
                <div className='Topt'>TOP DESTINATION</div>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}  // Enables looping of slides
                // autoplay={{
                //     delay: 2500,  // Sets autoplay delay in milliseconds
                //     disableOnInteraction: false,  // Keeps autoplay running after user interaction
                // }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 3,
                    depth: 100,
                    modifier: 4,
                    slideShadows: true,
                }}
                pagination={true}
                navigation={true} 
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                

            </Swiper>
            </div>
            
        </div>
            
        </>
    )
}

