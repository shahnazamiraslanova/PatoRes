import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Review.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <div className='review'>
            <p>Customers Say</p>
            <h2>REVIEW</h2>
            <Swiper
            id='swiperrr'
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='sliderImg1'></div>
                    <p className='userThinks'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, repellendus? Molestiae at neque blanditiis placeat odio deserunt quos quas nostrum.</p>
                    <p className='userName'>Shahnaz Amiraslanova</p>
                </SwiperSlide>
                <SwiperSlide>
                <div className='sliderImg2'></div>
                    <p className='userThinks'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, repellendus? Molestiae at neque blanditiis placeat odio deserunt quos quas nostrum.</p>
                    <p className='userName'>Shahnaz Amiraslanova</p>
                </SwiperSlide>
                <SwiperSlide>
                <div className='sliderImg3'></div>
                    <p className='userThinks'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, repellendus? Molestiae at neque blanditiis placeat odio deserunt quos quas nostrum.</p>
                    <p className='userName'>Shahnaz Amiraslanova</p>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
}
