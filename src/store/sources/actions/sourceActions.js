import axios from "axios";
import API_ROUTE from "../../../utils/constants";
import {SOURCE_ERROR, SOURCE_SUCCESS} from "../actionTypes";

export const orderSources = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/sources`);
            dispatch({type: SOURCE_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: SOURCE_ERROR, payload: err.response.data.error_message})
        }
    }
};
