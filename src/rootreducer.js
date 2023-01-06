import React from "react"
import { act } from "react-dom/test-utils"
import data from "./data.json"

const INITIAL_STATE = {products : data.products, cart: []}


const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case("ADD_TO_CART"):
            if(state.cart.some(product => product.name === action.payload.name)) {
                return {
                    ...state, 
                    cart : [...state.cart.map(product => product.name === action.payload.name ? {...product, quantity : product.quantity + 1} : product)]
                }
            } else {
                return {
                    ...state,
                    cart : [...state.cart, data.products[action.payload.id]]
                }
            }
        case("REMOVE_FROM_CART"):
            return {
                ...state, 
                cart : [...state.cart.filter(product => product.name != action.payload.name)]
            }
        case("LOWER_QUANTITY"):
            return {
                ...state, 
                cart : [...state.cart.map(product => product.name === action.payload.name ? {...product, quantity : product.quantity - 1} : product)]
            }       
        default: 
            return state
    }
}

export default rootReducer
