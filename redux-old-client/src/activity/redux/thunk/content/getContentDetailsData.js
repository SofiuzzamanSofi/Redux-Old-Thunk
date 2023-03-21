import axios from "axios"
import { getContentDetails } from "../../actions/contentActions";

const getContentDetailsData = (_id) => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_SERVER_SITE_URL}/content/${_id}`)
            if (res.data.success) {
                dispatch(getContentDetails(res.data.data));
            };
        }
        catch (err) {
            console.log(err);
        };
    };
};

export default getContentDetailsData;