import React from "react"
import "./ProductCard.css"


const ProductCard = ({name, image, price, description}) => {
    return (
        <div className="product">
        <h1>{name}</h1>
        <img src={image}></img>
        <h2>{price}</h2>
        <p>{description}</p>
        <button className="add-btn">Add to cart</button>
        <button className="remove-btn">Remove from cart</button>
        </div>
    )
}

export default ProductCard