import React from "react"
import { useDispatch } from "react-redux"
import "./CartItem.css"
import { LOWER_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART} from "./ActionTypes"


const CartItem = ({name, price, description, image, quantity}) => {

    const dispatch = useDispatch();


    const removeFromCart = (name) => {
        dispatch({type: REMOVE_FROM_CART, payload : {name}})
    }

    const lowerQuantity = (name) => {
        dispatch({type: LOWER_QUANTITY, payload: {name}})
    }

    const addToCart = (id) => {
        dispatch({type : ADD_TO_CART, payload: {id : id, name: name}});
    }

    return (
        <div className="cart-item">
        <h2>{name}</h2>
        <img src={image}></img>
        <h2>$ {price}</h2>
        <p>{description}</p>
        <h3>{quantity}</h3>
        <h3>Total : ${price * quantity}</h3>

        <div id="buttons">
        <button onClick={() => removeFromCart(name)} className="remove-btn">Remove from cart</button>
        <button onClick={() => addToCart(name)}>+</button>
        <button onClick={() => lowerQuantity(name)}>-</button>
        </div>

        </div>
    )
}

export default CartItem