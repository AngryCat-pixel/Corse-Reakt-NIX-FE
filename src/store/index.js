import {combineReducers, createStore} from "redux";
import {productsReducer} from "./products/reducer";
import {categoriesReducer} from "./categories/reducer";

const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer
})

export const store = createStore(rootReducer);
