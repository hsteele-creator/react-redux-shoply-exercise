import React from "react"
import { useSelector } from "react-redux"
import ProductCard from "./ProductCard"
import "./Products.css"
import {Link} from "react-router-dom"

const Products = () => {

const products = useSelector(state => state.products);


return (
    <>
    <Link id="cart-link" to ="/cart">🛒</Link>
    
    <ul>
    {Object.keys(products).map(id => <ProductCard 
        image={products[id].image_url} 
        name={products[id].name}
        price={products[id].price}
        description={products[id].description}
        id={id}
        />)} 
    </ul>
    </>
)



}

export default Products