import React from "react"
import {Link} from "react-router-dom"
import "./css/Nav.css"

const Nav = () => {
    return (
        <div id="Nav">
        <Link id="home-link" to ="/">Home</Link>
        <Link id="cart-link" to ="/cart">🛒</Link>       
        </div>
    )
}

export default Nav

