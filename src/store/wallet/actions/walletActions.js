import axios from "axios";
import API_ROUTE from "../../../utils/constants";
import { PAYMENT_SUCCESS } from "../actionTypes";



export const orderWallet = () => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/games`)
            dispatch({type: PAYMENT_SUCCESS, payload: res.data.games})
        }catch (err) {
            dispatch({type: PAYMENT_ERROR, payload: err.error})
        }
    }
}

