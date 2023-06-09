import style from './Header.module.scss'
 const HeaderNavBar = ({item}) => {
      return (
          <ul  className={style.list}>
              <li className={style.item}>
                  <a href="#">{item.name}</a>
              </li>
          </ul>
      )
 }
export default HeaderNavBar
