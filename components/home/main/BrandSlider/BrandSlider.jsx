import {Swiper, SwiperSlide} from 'swiper/react';
import {brandSliderConfig} from "../../../../config/BrandSlider/config.js";

const BrandSlider = () => {
    return (
        <Swiper {...brandSliderConfig}>

            <SwiperSlide><img src="public/brands/amazon.svg" alt=""/></SwiperSlide>
            <SwiperSlide><img src="public/brands/h`m.svg" alt=""/></SwiperSlide>
            <SwiperSlide><img src="public/brands/lacoste.svg" alt=""/></SwiperSlide>
            <SwiperSlide><img src="public/brands/levis.svg" alt=""/></SwiperSlide>
        </Swiper>
    )
}

export default BrandSlider