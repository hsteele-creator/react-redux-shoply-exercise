import React from "react"
import CartItem from "./CartItem"
import { useSelector } from "react-redux"
import "./css/Cart.css"
import Nav from "./Nav"

const Cart = () => {

    const cart = useSelector(state => state.cart);
    console.log(cart)

    


    return (
        <>

        <Nav/>
        <h1 id="cart-title">Cart</h1>

        {/* <h2 id="total">Cart Total : ${cart.length > 0 ? cart.reduce((curr, next) => (curr.price * curr.quantity) + (next.price * next.quantity)) : 0}</h2> */}

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