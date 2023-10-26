import React from 'react'
import Slider from 'react-slick'
import './carousel.css'
import Vedio from '../../components/Fitness_Section/Vedio'
export default function Carousel({ list }) {

    const settings = {
        dots: false,
        speed: 500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '5px',
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    }
    return (

        <div className='m_carousel'>
            <Slider {...settings} >
                {list?.map(i => (
                    <div className="wrapper" key={Math.random() * 100}><Vedio item={i} style={{ margin: 'auto' }} /></div>
                ))}
            </Slider>
        </div>
    )
}
