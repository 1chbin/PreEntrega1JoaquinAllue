import CartWidget from "../CartWidgets/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <header className="header_nav">
                <h3 className="Titulo">Proyecto1</h3>
                <div className="container1">
                    <button className="boton">Buzos</button>
                    <button className="boton">Pantalones</button>
                    <button className="boton">Zapatillas</button>
                </div>
                <CartWidget/>
            </header>
        </nav>
    )
}

export default NavBar