import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "./ProductCard.css"


const ProductCard = ({id, name, image, price, description}) => {

    const dispatch = useDispatch();

    const products = useSelector(state => state.products);

    const addToCart = (id) => {
        dispatch({type : "ADD_TO_CART", payload: {id : id}});
    }

    return (
        <div className="product">
        <h1>{name}</h1>
        <img src={image}></img>
        <h2>{price}</h2>
        <p>{description}</p>
        <button onClick={() => addToCart(id)} className="add-btn">Add to cart</button>
        </div>
    )
}

export default ProductCard