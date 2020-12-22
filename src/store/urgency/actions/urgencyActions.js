import axios from "axios";
import API_ROUTE from "../../../utils/constants";
import {URGENCY_ERROR, URGENCY_SUCCESS} from "../actionTypes";


export const orderUrgency = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/urgencies`);
            dispatch({type: URGENCY_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: URGENCY_ERROR, payload: err.response.data.error_message})
        }
    }
};
