import { useState, useEffect} from 'react'
import { getProducts, getProductsByCategory } from '../AsyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error =>{
                console.error(error)
            })
    }, [categoryId])
    
    return (
        <>¿<div className="container2">
            <h1 className="texto">Bienvenidos a mi eCommerce</h1>
            <h2 className="subtitulo">En esta tienda vendemos todo tipo de productos de ropa</h2>
        </div>
        <div className="container3">
            <ItemList products={products}/>
        </div></>
    )
}

export default ItemListContainer