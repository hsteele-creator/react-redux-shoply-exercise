import { ADD_TO_CART, REMOVE_FROM_CART, LOWER_QUANTITY, RAISE_QUANTITY } from "./ActionTypes"

export const addToCart = (id, name, quantity) => {
    return {type: ADD_TO_CART, payload: {id, name, quantity}}
}

export const removeFromCart = (name) => {
    return {type: REMOVE_FROM_CART, payload: {name}}
}

export const raiseQuantity = (name) => {
    return {type: RAISE_QUANTITY, payload: {name}}
}


export const lowerQuantity = (name) => {
    return {type: LOWER_QUANTITY, payload: {name}}
}