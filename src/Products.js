import React from "react"
import { useSelector } from "react-redux"
import ProductCard from "./ProductCard"
import "./Products.css"
import Nav from "./Nav"


const Products = () => {

const products = useSelector(state => state.products);


return (
    <>
    <Nav/>
    <h1 id="product-header">Products</h1>
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