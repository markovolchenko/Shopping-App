import HeaderNavBar from "./HeaderNavBar.jsx";
import style from './Header.module.scss'
import {items} from "../../../data/header-nav.data.js";

const Header = () =>{
    return (
        <div className="main-container">
            <img src="public/logo/fashion-logo.png" alt="fashion-logo"/>
            <div className={style.nav}>
                {items.map(item =>(
            <HeaderNavBar key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
}

export default Header
