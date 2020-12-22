import axios from "axios";
import API_ROUTE from "../../../utils/constants";
import {SERVICE_ERROR, SERVICE_SUCCESS} from "../actionTypes";

export const orderService = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/services`);
            dispatch({type: SERVICE_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: SERVICE_ERROR, payload: err.response.data.error_message})
        }
    }
};
