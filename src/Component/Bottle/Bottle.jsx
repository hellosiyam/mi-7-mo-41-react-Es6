import PropTypes from 'prop-types';
import './Bottle.css'

const Bottle = ({bottle, handelAddToCard}) => {
    const {name, img, price} = bottle
    return (
        <div className="bottle">
            <h4>Bottle : {name}</h4>
            <img src={img} alt="" />
            <p>Price : {price}</p>
            <button onClick={() => handelAddToCard(bottle)}>Add to Card</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.array.isRequired,
    handelAddToCard: PropTypes.func.isRequired,
}

export default Bottle;