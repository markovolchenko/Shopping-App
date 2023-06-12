import styles from "../Header.module.scss";
import {titles} from '../../../../data/HeaderBanner/heading-banner.data'


const HeaderBanner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.col}>
                <div className={styles.title}>
                    {titles.map(title => (
                        <>
                            <h1 key={title.id} className={styles.text}>{title.text}</h1>
                        </>
                    ))}
                </div>
                <span className={styles.subtitle}>Live for Influential and Innovative fashion!</span>
                <div className={styles.decoration_button}>
                    <div className={styles.decoration}></div>
                    <button className='main-btn main-btn-lg'>Shop now</button>
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.image_box}>
                    <img src="public/banner-bg/banner-girl-1.png" alt="image" className={styles.image}/>
                </div>
            </div>
        </div>
    )
}
export default HeaderBanner