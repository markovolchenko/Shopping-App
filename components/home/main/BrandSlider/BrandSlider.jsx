import {Swiper, SwiperSlide} from 'swiper/react';
import {brandSliderConfig} from "../../../../config/BrandSlider/config.js";
import 'swiper/swiper.css'
import style from './BrandSlider.module.scss'
import {brands} from "../../../../data/BrandSlider/brand-slider.data.js";

const BrandSlider = () => {
    return (

        <div className={style.wrap}>
            <div className='main-container'>
                <Swiper {...brandSliderConfig}>
                    {brands.map(item => (
                        <SwiperSlide key={item.id} className={style.slide}>
                            <a href={item.url}>
                                <img src={item.image} alt="image" className={style.brand}/>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default BrandSlider