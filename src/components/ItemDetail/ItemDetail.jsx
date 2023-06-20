import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, titulo, img, precio, stock, talla, modelo, marca, category, color, material }) => {
    return (
        <div className="card">
            <img src={img} alt={titulo} />
                <div className="contenido">
                    <h3>{titulo}</h3>
                    <p>{category} {marca} {modelo} de color {color} talle {talla} </p>
                    <p className="precio">Precio: ${precio}</p>
                    <p>Stock actual:{stock}</p>
                    <div>
                        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Se agragaron', quantity)}/>
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail