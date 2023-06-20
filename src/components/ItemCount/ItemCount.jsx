import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
const [quantity, setQuantity] = useState(initial)

const increment = () => {
    if (quantity < stock) {
        setQuantity (quantity + 1)
    }
}

const decrement = () => {
    if (quantity > 1) {
        setQuantity (quantity - 1)
    }
}

return(
    <div className="containerSumaResta">
        <div className="container4">
            <button className="sumaResta" onClick={decrement}>-</button>
            <h1 className="solicitar">{quantity}</h1>
            <button className="sumaResta" onClick={increment}>+</button>
        </div>
        <div className="container4">
            <button onClick={() => onAdd(quantity)} disabled={!stock} className="agregar">Agregar al carrito</button>
        </div>
    </div>
)
}

export default ItemCount