import styles from '../Header.module.scss'

const HeaderNavBar = ({item}) => {
    return (
        <li className={styles.item}>
            <a className={styles.link} href="#">{item.name}</a>
        </li>
    )
}
export default HeaderNavBar
