import axios from "axios";
import API_ROUTE from "../../../utils/constants";
import { LEVEL_ERROR, LEVEL_SUCCESS} from "../actionTypes";


export const orderLevel = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${API_ROUTE}/levels`);
            dispatch({type: LEVEL_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: LEVEL_ERROR, payload: err.response.data.error_message})
        }
    }
};

