import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './event.css'

function Event() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <div className='section__padding rise__carousel'>
      <Carousel responsive={responsive}
      itemClass="carousel-item-padding-40-px"
      autoPlaySpeed={100}
      showDots={true}
    //   infinite={true}
    //   focusOnSelect={true}
        centerMode={true}
      >
  <div className='carousel_card'>Item 1</div>
  <div className='carousel_card'>Item 1</div>
  <div className='carousel_card'>Item 1</div>
  <div className='carousel_card'>Item 1</div>
  <div className='carousel_card'>Item 1</div>
  <div className='carousel_card'>Item 1</div>
  <div className='carousel_card'>Item 1</div>
  <div className='carousel_card'>Item 1</div>
  <div className='carousel_card'>Item 1</div>
  <div className='carousel_card'>Item 1</div>
  <div className='carousel_card'>Item 1</div>
  <div className='carousel_card'>Item 1</div>
  <div className='carousel_card'>Item 1</div>
</Carousel>;
    </div>
  )
}

export default Event