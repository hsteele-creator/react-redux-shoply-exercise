import React from "react"
import data from "./data.json"

const INITIAL_STATE = {items : data.products}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state
    }
}

export default rootReducer