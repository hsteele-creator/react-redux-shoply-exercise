import React from "react"
import { act } from "react-dom/test-utils"
import data from "./data.json"

const INITIAL_STATE = {items : data.products, cart: []}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case(action.type === "ADD_TO_CART"):

        case(action.type ==="REMOVE_FROM_CART"):

        default: 
            return state
    }
}

export default rootReducer