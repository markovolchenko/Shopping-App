import {Swiper, SwiperSlide} from "swiper/react";
import {slides} from '../../../../data/NewArrivalsSlider/new-arrivals-slider'
import {NewArrivalsSliderConfig} from "../../../../config/NewArrivalsSlider/config.js";
import style from './NewArrivalsSlider.module.scss'
import 'swiper/swiper.css'

const NewArrivalsSlider = () => {
    return (
        <div>
            <div className='main-container'>
                <Swiper {...NewArrivalsSliderConfig}>
                    {slides.map(item => (
                        <SwiperSlide key={item.id}>
                            <div className={style.container}>
                                <div className={style.box}>
                                    <img src={item.image} alt="image"/>
                                </div>
                                <h1 className={style.name}>{item.name}</h1>
                                <a href='#' className={style.link}>Explore Now</a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default NewArrivalsSlider