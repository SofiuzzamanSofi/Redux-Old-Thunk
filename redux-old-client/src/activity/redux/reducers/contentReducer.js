import { CONTENT_DETAILS, GET_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    cart: [],
    contents: [],
    readingHistory: []
};
const contentReducer = (state = initialState, action) => {



    switch (action.type) {

        case GET_CONTENT:
            return {
                ...state,
                contents: action.payload,
            }

        case CONTENT_DETAILS:
            return {
                ...state,
                readingHistory: [...state.readingHistory, action.payload],
            }


        default: return state;
    }
};

export default contentReducer;