import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else{
            console.error('Tu compra ya ha sido añadida')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalCompra = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalCompra}}>
                {children}
        </CartContext.Provider>
    )
}