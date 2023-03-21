import { CONTENT_DETAILS, GET_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    cart: [],
    contents: [],
    readingHistory: []
};
const contentReducer = (state = initialState, action) => {

    // const selectedContent = state.contents.find();
    const readingContent = state.readingHistory.find(
        readingC => readingC._id === action.payload._id
    );
    // console.log("readingC:", readingContent, "payloadddd:", action.payload);


    switch (action.type) {

        case GET_CONTENT:
            return {
                ...state,
                contents: action.payload,
            }

        case CONTENT_DETAILS:
            if (readingContent) {
                const newContent = state.readingHistory.filter(
                    readingC => readingC._id !== readingContent._id
                );
                // readingContent.readingCount = readingContent.readingCount + 1;
                // readingContent.readingCount += 1;
                readingContent.readingCount++;
                return {
                    ...state,
                    readingHistory: [...newContent, readingContent]
                }
            } else {
                return {
                    ...state,
                    readingHistory: [...state.readingHistory, { ...action.payload, readingCount: 1 }],
                }
            }

        default: return state;
    }
};

export default contentReducer;