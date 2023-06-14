import style from './MainBanner.module.scss'
import {titles, subtitles} from "../../../../data/MainBanner/main-banner.data.js";
import BgIcons from "../../BgIcons/BgIcons.jsx";
import {grayStars} from "../../../../data/bgIcons/bg-icons.data.js";


const MainBanner = () => {
    return (
        <div className={style.banner}>
            <div className='main-container'>
                <div className={style.row}>
                    <div className={style.col}>
                        <div className={style.image_box}>
                            <img src="public/banner-bg/banner-girl-2.png" alt="image" className={style.image}/>
                        </div>
                    </div>
                    <div className={`${style.col} ${style.col_right}`}>
                        <div className={style.title}>
                            {titles.map(title => (
                                <h1 key={title.id} className={style.text}>{title.text}</h1>
                            ))
                            }
                            {subtitles.map(text => (
                                <span className={style.subtitle} key={text.id}>{text.text}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.star}>
                <BgIcons icons={grayStars}/>
            </div>
        </div>
    )
}
export default MainBanner