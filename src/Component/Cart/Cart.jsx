import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({cart, handelRemoveToCard}) => {

    return (
        <div>
            <h4>Cart : {cart.length}</h4>
            <div className="cart">
                {cart.map(bottle => <div key={bottle.id}>
                    <img src={bottle.img}></img>
                    <button onClick={() => handelRemoveToCard(bottle.id)}>Remove</button>
                    </div>)}
            </div>
        </div>
    );
};
Cart.propTypes = {
    cart : PropTypes.array.isRequired,
    handelRemoveToCard: PropTypes.func.isRequired
        
}
export default Cart;