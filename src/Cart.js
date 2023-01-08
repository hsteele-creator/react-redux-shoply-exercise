import React from "react"
import CartItem from "./CartItem"
import { useSelector } from "react-redux"
import "./Cart.css"
import Nav from "./Nav"

const Cart = () => {

    const cart = useSelector(state => state.cart);
    console.log(cart)

    // const total = cart.reduce((curr, next) => {
    //     return (curr.price * curr.quantity) + (next.price + next.quantity)
    // })


    return (
        <>

        <Nav/>
        <h1 id="cart-title">Cart</h1>


        <div id="cart-container">
        {cart.filter(product => product.quantity != 0).map(product => {
            return <CartItem 
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image_url}
            quantity={product.quantity}
            />
        })}
        </div>
        </>
    )

}

export default Cart