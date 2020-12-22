import axios from "axios";
import API_ROUTE from "../../../utils/constants";
import {SUBJECT_ERROR, SUBJECT_SUCCESS} from "../actionTypes";


export const orderSubject = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/subjects`,
                { headers: { 'x-toprated-token': `${localStorage.getItem('token')}` } });
            dispatch({type: SUBJECT_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: SUBJECT_ERROR, payload: err.response.data.error_message})
        }
    }
};
