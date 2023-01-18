import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import "./css/ProductCard.css"
import { addToCart} from "./ActionCreators"


const ProductCard = ({id, name, image, price, description}) => {

    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch();

    const add = () => {
        dispatch(addToCart(id, name, quantity))

        setQuantity(1)
    }

    return (
        <>
        <div className="product">
        <h2>{name}</h2>
        <img src={image}></img>
        <h2>{price}</h2>
        <p>{description}</p>

        <label htmlFor="quantity">QTY: </label>
        <input 
        type="number"
        min="1" 
        max="100" 
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
        ></input>

        <button onClick={() => add(id)} className="add-btn">Add to cart</button>

        </div>

        </>
    )
}

export default ProductCard