import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 


const Inter = () => {
  const slides = [
    { url: 'https://via.placeholder.com/300x200/FF5733', alt: 'Slide 1' },
    { url: 'https://via.placeholder.com/300x200/33FF57', alt: 'Slide 2' },
    { url: 'https://via.placeholder.com/300x200/3357FF', alt: 'Slide 3' },
    { url: 'https://via.placeholder.com/300x200/57FF33', alt: 'Slide 4' },
    { url: 'https://via.placeholder.com/300x200/5733FF', alt: 'Slide 5' },
    { url: 'https://via.placeholder.com/300x200/FF33AA', alt: 'Slide 6' },
    { url: 'https://via.placeholder.com/300x200/AAFF33', alt: 'Slide 7' },
    { url: 'https://via.placeholder.com/300x200/33AAFF', alt: 'Slide 8' },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, // Show 3 images at a time
      slidesToSlide: 1, // Scroll 1 image at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2, // Show 2 images at a time on tablets
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Show 1 image at a time on mobile
      slidesToSlide: 1,
    },
  };

  return (
    <div style={{ padding: '80px', backgroundColor:'#fff' }}>
    <div className='tourm'>TOUR PACKAGE</div>
    <div className='tr2m'>Download the perfect destination pictures. Find over 100+ of the best free destination images.</div>
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      showDots={true}
      swipeable={true}
      draggable={true}
    >
      {slides.map((slide, index) => (
        <div key={index} style={{ padding: '60px 20px' }}>
            <div className='box'>
            <img
            src={slide.url}
            alt={slide.alt}
            style={{ width: '100%', height:'350px', borderRadius: '8px' }}
          />
            </div>
          
        </div>
      ))}
    </Carousel>
  </div>
   
  );
};

export default Inter;
