import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, titulo, img, precio, stock, talla, modelo, marca, category, color, material }) => {
    const [quantityAdded, setQuantityAdded] =useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, titulo, precio
        }

        addItem(item, quantity)
    }

    return (
        <div className="card">
            <img src={img} alt={titulo} />
                <div className="contenido">
                    <h3>{titulo}</h3>
                    <p>{category} {marca} {modelo} de color {color} talle {talla} </p>
                    <p className="precio">Precio: ${precio}</p>
                    <p>Stock actual:{stock}</p>
                    <div>
                        {
                            quantityAdded > 0 ? (
                                <Link to='/cart'>confirmar compra del producto</Link>
                            ) : (
                                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                            )
                        }
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail