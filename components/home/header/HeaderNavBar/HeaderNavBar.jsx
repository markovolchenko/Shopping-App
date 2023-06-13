import styles from '../Header.module.scss'
import {items} from "../../../../data/HeaderNavBar/header-nav.data.js";

const HeaderNavBar = () => {
    return (
        <>
            {items.map(item => (
                <li key={item.id} className={styles.item}>
                    <a className={styles.link} href="#">{item.name}</a>
                </li>
            ))}
        </>
    )
}
export default HeaderNavBar
