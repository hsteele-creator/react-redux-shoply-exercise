import React from "react"
import CartItem from "./CartItem"
import { useSelector } from "react-redux"

const Cart = () => {

    const cart = useSelector(state => state.cart);
    console.log(cart)

    return (
        <>
        <h1>Cart</h1>
        {cart.map(product => {
            return <CartItem 
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image_url}
            />
        })}
        </>
    )

}

export default Cart