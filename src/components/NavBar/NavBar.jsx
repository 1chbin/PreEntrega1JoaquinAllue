import CartWidget from "../CartWidgets/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <header className="header_nav">
                <Link className="links1" to={'/'}>
                <h3 className="Titulo">ClothesShop</h3>
                </Link>
                <div className="container1">
                    <Link id="button" to={`/category/Zapatillas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Zapatillas</Link>
                    <Link id="button" to={`/category/Campera`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Camperas</Link>
                    <Link id="button" to={`/category/Buzo`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Buzos</Link>
                    <Link id="button" to={`/category/Pantalon`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Pantalones</Link>
                </div>
                <CartWidget/>
            </header>
        </nav>
    )
}

export default NavBar