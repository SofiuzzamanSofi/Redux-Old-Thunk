import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk"
import rootReducer from "../reducers/rootReducer"
import { composeWithDevTools } from "@redux-devtools/extension"



const store = createStore(
    rootReducer,
    // composeWithDevTools(applyMiddleware(thunk, logger)),
    composeWithDevTools(applyMiddleware(thunk,)),
);

export default store;