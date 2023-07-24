import * as ActionType from '../ActionType'
const initState = {
    products: [],
    loading: false,
    error: null
}

export const productsReducer = (state = initState, action) => {
    console.log(action)
    switch (action.type) {
        case ActionType.PRODUCT_GET:
            return {
                ...state,
                products: action.payload
            }
        case ActionType.PRODUCT_ADD:
            return {
                ...state,
                products: state.products.concat(action.payload)
            }
        case ActionType.PRODUCT_REMOVE:
            return {
                ...state,
                products: state.products.filter((val) => val.id !== action.payload)
            }
        case ActionType.PRODUCT_UPDATE:
            return {
                ...state,
                products: state.products.map((val) => {
                    if(val.id === action.payload.id) {
                        return action.payload
                    } else {
                        return val
                    }
                })
            }
        default:
            return state
    }
}



