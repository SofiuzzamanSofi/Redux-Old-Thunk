import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import contentReducer from "./contentReducer";

const rootReducer = combineReducers({
    contents: contentReducer,
    filter: filterReducer,
});

export default rootReducer;