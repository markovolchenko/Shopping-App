import style from "../Header.module.scss";
import {titles, subtitle} from '../../../../data/HeaderBanner/header-banner.data.js'
import BgIcons from "../../BgIcons/BgIcons.jsx";


const HeaderBanner = () => {
    return (

        <div className={style.banner}>
            <div className={style.col}>
                <div className={style.title}>
                    {titles.map(title => (
                        <>
                            <h1 key={title.id} className={style.text}>{title.text}</h1>
                        </>
                    ))}
                </div>

                <span className={style.subtitle}>{subtitle.text}</span>

                <div className={style.decoration_button}>
                    <div className={style.decoration}></div>
                    <button className='main-btn main-btn-lg'>Shop now</button>
                </div>
            </div>
            <div className={style.col}>
                <div className={style.image_box}>
                    <img src="public/banner-bg/banner-girl-1.png" alt="image" className={style.image}/>
                </div>
            </div>
            <div className={style.star}>
                <BgIcons/>
            </div>
        </div>

    )
}
export default HeaderBanner