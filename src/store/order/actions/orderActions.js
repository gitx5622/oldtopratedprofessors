import axios from "axios";
import API_ROUTE from "../../../utils/constants";
import { history } from "../../../utils/history";
import {BEFORE_STATE,
        ORDER_ALL_ORDERS_ERROR, 
        ORDER_ALL_ORDERS_SUCCESS, 
        ORDER_APPROVED_ERROR, 
        ORDER_APPROVED_SUCCESS, 
        ORDER_CANCELLED_ERROR, 
        ORDER_CANCELLED_SUCCESS, 
        ORDER_COMPLETED_ERROR, 
        ORDER_COMPLETED_SUCCESS, 
        ORDER_CREATE_ERROR, 
        ORDER_CREATE_SUCCESS, 
        ORDER_INPROGRESS_SUCCESS,
        ORDER_INPROGRESS_ERROR,
        ORDER_PENDING_ERROR,
        ORDER_PENDING_SUCCESS,
        ORDER_REJECTED_ERROR,
        ORDER_REJECTED_SUCCESS,
        ORDER_REVISION_ERROR,
        ORDER_REVISION_SUCCESS,
        ORDER_WAITING_ASSIGN_ERROR,
        ORDER_WAITING_ASSIGN_SUCCESS} from "../actionTypes";


export const orderCreate = (credentials) => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/`, credentials)
            dispatch({type: ORDER_CREATE_SUCCESS, payload: res.data.games})
        }catch (err) {
            dispatch({type: ORDER_CREATE_ERROR, payload: err.error })
            history.push("/");
        }
    }
}

export const allOrders = () => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/games`)
            dispatch({type: ORDER_ALL_ORDERS_SUCCESS, payload: res.data.games})
        }catch (err) {
            dispatch({type: ORDER_ALL_ORDERS_ERROR, payload: err.error})
        }
    }
}

export const orderApproved = () => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/games`)
            dispatch({type: ORDER_APPROVED_SUCCESS, payload: res.data.games})
        }catch (err) {
            dispatch({type: ORDER_APPROVED_ERROR, payload: err.error})
        }
    }
}

export const orderCompleted = () => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/games`)
            dispatch({type: ORDER_COMPLETED_SUCCESS, payload: res.data.games})
        }catch (err) {
            dispatch({type: ORDER_COMPLETED_ERROR, payload: err.error})
        }
    }
}

export const orderInprogress = () => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/games`)
            dispatch({type: ORDER_INPROGRESS_SUCCESS, payload: res.data.games})
        }catch (err) {
            dispatch({type: ORDER_INPROGRESS_ERROR, payload: err.error})
        }
    }
}

export const orderPending = () => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/games`)
            dispatch({type: ORDER_PENDING_SUCCESS, payload: res.data.games})
        }catch (err) {
            dispatch({type: ORDER_PENDING_ERROR, payload: err.error})
        }
    }
}

export const orderRevision = () => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/games`)
            dispatch({type: ORDER_REVISION_SUCCESS, payload: res.data.games})
        }catch (err) {
            dispatch({type: ORDER_REVISION_ERROR, payload: err.error})
        }
    }
}

export const orderRejected = () => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/games`)
            dispatch({type: ORDER_REJECTED_SUCCESS, payload: res.data.games})
        }catch (err) {
            dispatch({type: ORDER_REJECTED_ERROR, payload: err.error})
        }
    }
}

export const orderCancelled = () => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/games`)
            dispatch({type: ORDER_CANCELLED_SUCCESS, payload: res.data.games})
        }catch (err) {
            dispatch({type: ORDER_CANCELLED_ERROR, payload: err.error})
        }
    }
}

export const orderWaitingAssign = () => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/games`)
            dispatch({type: ORDER_WAITING_ASSIGN_SUCCESS, payload: res.data.games})
        }catch (err) {
            dispatch({type: ORDER_WAITING_ASSIGN_ERROR, payload: err.error})
        }
    }
}
