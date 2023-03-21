import axios from "axios";
import { getContent } from "../../actions/contentActions";

const getContentData = () => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_SERVER_SITE_URL}/content`)
            if (res.data.success) {
                dispatch(getContent(res.data.data));
            }
        }
        catch (err) {
            console.log(err);
        }
    }
};

export default getContentData;