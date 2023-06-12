import HeaderNavBar from "./HeaderNavBar/HeaderNavBar";
import HeaderBanner from "./HeaderBanner/HeaderBanner";
import {items} from "../../../data/HeaderNavBar/header-nav.data.js";
import style from './Header.module.scss'


const Header = () => {
    return (
        <div className="main-container">
            <div className={style.header_wrap}>
                <a href={'index.html'} className={style.logo}></a>
                <div className={style.nav_button}>
                    <ul className={style.list}>
                        {items.map(item => (
                            <HeaderNavBar key={item.id} item={item}/>
                        ))}
                    </ul>
                    <button className='main-btn'>Sign Up</button>
                </div>
            </div>
            <HeaderBanner/>
        </div>
    )
}

export default Header
