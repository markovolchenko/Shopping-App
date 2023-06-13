import HeaderNavBar from "./HeaderNavBar/HeaderNavBar";
import HeaderBanner from "./HeaderBanner/HeaderBanner";
import style from './Header.module.scss'


const Header = () => {
    return (
        <>
            <div className='main-container'>
                <div className={style.header_wrap}>
                    <a href={'index.html'} className={style.logo}></a>
                    <div className={style.nav_button}>
                        <ul className={style.list}>
                            <HeaderNavBar/>
                        </ul>
                        <button className='main-btn'>Sign Up</button>
                    </div>
                </div>
            </div>
            <div className='main-container'>
                <HeaderBanner/>
            </div>
        </>
    )
}

export default Header
