import axios from "axios";
import API_ROUTE from "../../../utils/constants";
import {LANGUAGE_ERROR, LANGUAGE_SUCCESS} from "../actionTypes";



export const orderLanguage = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/languages`);
            dispatch({type: LANGUAGE_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: LANGUAGE_ERROR, payload: err.response.data.error_message})
        }
    }
};
