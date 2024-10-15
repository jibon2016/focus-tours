import React from 'react'
import Slider from 'react-slick'

export default function Services() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000
    };    
    return (
        <div className='relative w-full'>
            <div className=' top-0 md:-top-[290px] py-10 px-10'>
                <h2 className='text-center text-3xl md:text-4xl py-2 font-madimi-one capitalize'>Our Services</h2>
                <div className="py-4 text-justify slider-container">
                    <Slider {...settings}>
                        <div className="bg-red-400 py-2 px-4"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui dolor tempora laudantium corporis ipsam similique, minima fuga cupiditate dolores quae provident dolorum! Impedit enim, veniam velit eaque odio autem.</p></div>
                        <div className="bg-red-400 py-2 px-4"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui dolor tempora laudantium corporis ipsam similique, minima fuga cupiditate dolores quae provident dolorum! Impedit enim, veniam velit eaque odio autem.</p></div>
                        <div className="bg-red-400 py-2 px-4"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui dolor tempora laudantium corporis ipsam similique, minima fuga cupiditate dolores quae provident dolorum! Impedit enim, veniam velit eaque odio autem.</p></div>
                        <div className="bg-red-400 py-2 px-4"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui dolor tempora laudantium corporis ipsam similique, minima fuga cupiditate dolores quae provident dolorum! Impedit enim, veniam velit eaque odio autem.</p></div>
                        <div className="bg-red-400 py-2 px-4"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui dolor tempora laudantium corporis ipsam similique, minima fuga cupiditate dolores quae provident dolorum! Impedit enim, veniam velit eaque odio autem.</p></div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}