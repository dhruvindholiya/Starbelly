import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { productsReducer } from "./Product.reducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    products: productsReducer
})