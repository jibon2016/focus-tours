import React from 'react'
import Slider from 'react-slick'
import Card from './Card';



export default function Services() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
        responsive: [
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
        ],
    };    
    return (
        <div className='relative w-full'>
<<<<<<< HEAD
            <div className='bg-white -mt-[260px] top-0 max-md:-mt-[10px] py-10 px-10'>
=======
            <div className='bg-white -mt-[310px] top-0 md:-top-[290px] py-10 px-10'>
>>>>>>> b45b8847a9204cb3fde223eb62bd08093a81d75b
                <h2 className='text-center text-3xl md:text-4xl py-2 font-madimi-one capitalize'>Our Services</h2>
                <div className="py-4 text-justify slider-container">
                    <Slider {...settings}>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
