import React from "react"
import { useDispatch } from "react-redux"
import "./css/CartItem.css"
import { LOWER_QUANTITY, RAISE_QAUNTITY, REMOVE_FROM_CART} from "./ActionTypes"


const CartItem = ({name, price, description, image, quantity}) => {

    const dispatch = useDispatch();


    const removeFromCart = (name) => {
        dispatch({type: REMOVE_FROM_CART, payload : {name}})
    }

    const lowerQuantity = (name) => {
        dispatch({type: LOWER_QUANTITY, payload: {name}})
    }

    const raiseQuantity = (name) => {
        dispatch({type : RAISE_QAUNTITY, payload: {name}});
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
        <button onClick={() => removeFromCart(name)} className="remove-btn">Remove from cart</button>
        <button onClick={() => raiseQuantity(name)}>+</button>
        <button onClick={() => lowerQuantity(name)}>-</button>
        </div>

        </div>
    )
}

export default CartItem