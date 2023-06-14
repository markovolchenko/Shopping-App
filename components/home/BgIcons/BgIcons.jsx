import {grayStars} from "../../../data/bgIcons/bg-icons.data.js";


const BgIcons = () => {
    return (
        <>
            {grayStars.map(item => (
                <img key={item.id} src={item.icon} alt="star"/>
            ))}
        </>
    )
}

export default BgIcons