import { ADD_TO_CART } from "./ActionTypes"

export const addToCart = (id, name) => {
    return {type: ADD_TO_CART, payload: {id, name}}
}