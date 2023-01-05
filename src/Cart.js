import React from "react"
import CartItem from "./CartItem"
import { useSelector } from "react-redux"
import "./Cart.css"

const Cart = () => {

    const cart = useSelector(state => state.cart);
    console.log(cart)

    return (
        <>
        <h1 id="cart-title">Cart</h1>

        <div id="cart-container">
        {cart.map(product => {
            return <CartItem 
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image_url}
            />
        })}
        </div>
        </>
    )

}

export default Cart