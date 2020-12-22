import axios from "axios";
import API_ROUTE from "../../../utils/constants";
import {TYPE_ERROR, TYPE_SUCCESS} from "../actionTypes";

export const orderTye = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/types`);
            dispatch({type: TYPE_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: TYPE_ERROR, payload: err.response.data.error_message})
        }
    }
};
