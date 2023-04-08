import {
    GET_CONTENT,
    CONTENT_DETAILS,
} from "../actionTypes/actionTypes";

export const getContent = data => {
    return {
        type: GET_CONTENT,
        payload: data,
    }
};

export const getContentDetails = data => {
    return {
        type: CONTENT_DETAILS,
        payload: data,
    }
}