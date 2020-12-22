import axios from "axios";
import API_ROUTE from "../../../utils/constants";
import {PAGE_ERROR, PAGE_SUCCESS} from "../actionTypes";

export const orderPages = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/pages`);
            dispatch({type: PAGE_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: PAGE_ERROR, payload: err.response.data.error_message})
        }
    }
};
