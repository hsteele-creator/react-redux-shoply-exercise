import React from "react"
import { useSelector } from "react-redux"


const ProductCard = ({name, image, price, description}) => {
    return (
        <div>
        <h1>{name}</h1>
        <img src={image} width="200px"></img>
        <h2>{price}</h2>
        <p>{description}</p>
        </div>
    )
}

export default ProductCard