import axios from "axios";
import API_ROUTE from "../../../utils/constants";
import { STYLE_ERROR, STYLE_SUCCESS} from "../actionTypes";

export const orderStyle = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/styles`,
                { headers: { 'x-toprated-token': `${localStorage.getItem('token')}` } });
            dispatch({type: STYLE_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: STYLE_ERROR, payload: err.response.data.error_message})
        }
    }
};
