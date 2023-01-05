import React from "react"
import { useDispatch } from "react-redux"
import "./CartItem.css"

const CartItem = ({name, price, description, image}) => {

    const dispatch = useDispatch();


    const removeFromCart = (name) => {
        dispatch({type: "REMOVE_FROM_CART", payload : {name : name}})
    }

    return (
        <div className="cart-item">
        <h1>{name}</h1>
        <img src={image}></img>
        <h2>{price}</h2>
        <p>{description}</p>
        <button onClick={() => removeFromCart(name)} className="remove-btn">Remove from cart</button>
        </div>
    )
}

export default CartItem