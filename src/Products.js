import React from "react"
import { useSelector } from "react-redux"
import ProductCard from "./ProductCard"
import "./Products.css"

const Products = () => {

const store = useSelector(state => state.items);

const productData = Object.entries(store);
console.log(productData)

return (
    <>
    <ul>
    {productData.map(product => 
    <ProductCard 
    image={product[1].image_url} 
    name={product[1].name}
    price={product[1].price}
    description={product[1].description}
    />
    )}
    </ul>
    </>
)



}

export default Products