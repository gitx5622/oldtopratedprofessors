import axios from "axios";
import API_ROUTE from "../../../utils/constants";
import {SPACING_ERROR, SPACING_SUCCESS} from "../actionTypes";

export const orderSpacing = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/spacings`,
                { headers: { 'x-toprated-token': `${localStorage.getItem('token')}` } });
            dispatch({type: SPACING_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: SPACING_ERROR, payload: err.response.data.error_message})
        }
    }
};
