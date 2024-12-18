import React from 'react'
import Slider from 'react-slick'
import Card from './Card';
import PassportAnimation from './animation/PassportAnimation';
import FlightTicket from './animation/FlightTicket';



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
    const PassportComponent = <PassportAnimation></PassportAnimation>
    const FlightTicketComponent = <FlightTicket></FlightTicket>
    return (
        <div className='relative w-full'>
            <div className='bg-white -mt-[310px] top-0 md:-top-[290px] py-10 px-10'>
                <h2 className='text-center text-3xl md:text-4xl py-2 font-madimi-one mb-5 capitalize'>Our Services</h2>
                <div className="py-4 text-justify slider-container">
                    <Slider {...settings}>
                        <Card Animation={PassportComponent} heading="Indian Visa" />
                        <Card Animation={FlightTicketComponent} heading="Flight Ticket"/>
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
