import { combineReducers } from "redux";
import filterReducer from "../store/filterReducer";
import productReducer from "../store/productReducer";

const rootReducer = combineReducers({
    product: productReducer,
    filter: filterReducer,
});

export default rootReducer;