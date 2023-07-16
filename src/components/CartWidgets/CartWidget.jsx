import cart from './assets/cart.svg'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <Link to="/cart">
            <div>
                <img className='carrito' src={cart} alt="cart-widget"/>
            </div>
        </Link>
        
    )
}

export default CartWidget