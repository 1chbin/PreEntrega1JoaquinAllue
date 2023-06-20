import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <div>
            <img className='carrito' src={cart} alt="cart-widget"/>
        </div>
    )
}

export default CartWidget