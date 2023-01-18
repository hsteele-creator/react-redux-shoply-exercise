import React from "react"
import { useDispatch } from "react-redux"
import "./css/CartItem.css"
import { removeFromCart, raiseQuantity, lowerQuantity } from "./ActionCreators"


const CartItem = ({name, price, description, image, quantity}) => {

    const dispatch = useDispatch();


    const remove = (name) => {
        dispatch(removeFromCart(name))
    }

    const lower = (name) => {
        dispatch(lowerQuantity(name))
    }

    const raise = (name) => {
        dispatch(raiseQuantity(name))
    }

    return (
        <div className="cart-item">
        <h2>{name}</h2>
        <img src={image}></img>
        <h2>$ {price}</h2>
        <p>{description}</p>
        <h3>{quantity}</h3>
        <h3>Total : ${Math.round(price * quantity)}</h3>

        <div id="buttons">
        <button onClick={() => remove(name)} className="remove-btn">Remove from cart</button>
        <button onClick={() => raise(name)}>+</button>
        <button onClick={() => lower(name)}>-</button>
        </div>

        </div>
    )
}

export default CartItem