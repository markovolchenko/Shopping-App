import {oneOfType, string, number} from 'prop-types'


const BgIcons = ({stars}) => {
    return (
        <>
            {stars.map(item => (
                <img key={item.id} src={item.icon} alt="star"/>
            ))}
        </>
    )
}

BgIcons.propTypes = {
    stars: oneOfType([string, number]),
};

export default BgIcons