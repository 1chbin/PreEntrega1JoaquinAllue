import { Link, Route, route, BrowserRouter } from "react-router-dom"

const Item = ({ id, titulo, img, precio, stock, talla, modelo, marca, category, color, material }) => {
    return (
            <div className="card">
            <img src={img} alt={titulo} />
                <div className="contenido">
                    <h3>{titulo}</h3>
                    <p>{category} {marca} {modelo} de color {color} talle {talla} </p>
                    <p className="precio">Precio: ${precio}</p>
                    <p>Stock actual:{stock}</p>
                    <div className="cajaDeBoton">
                        <Link to={`/item/${id}`} className="boton agregar-carrito">Ver mas</Link>
                    </div>
                </div>
            </div>
    )
}

export default Item