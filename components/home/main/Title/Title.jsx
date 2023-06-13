import style from "../Main.module.scss";

const Title = () => {
    return (
        <div className='main-container'>
            <div className={style.title_wrap}>
                <title className={style.title}>New Arrivals</title>
            </div>
        </div>
    )
}
export default Title