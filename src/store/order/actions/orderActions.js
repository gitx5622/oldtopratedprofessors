import axios from "axios";
import API_ROUTE from "../../../utils/constants";
import { history } from "../../../utils/history";
import {
    BEFORE_STATE,
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
    ORDER_WAITING_ASSIGN_SUCCESS,
    ORDER_GET_SUCCESS,
    ORDER_GET_ERROR,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_ERROR,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_ERROR
} from "../actionTypes";
import {message} from "antd";


export const orderCreate = (credentials) => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.post(`${API_ROUTE}/orders`, credentials,
                { headers: { 'x-toprated-token': `${localStorage.getItem('token')}` } });
            dispatch({type: ORDER_CREATE_SUCCESS, payload: res.data});
            history.push("/order/index");
            window.location.reload();
        }catch (err) {
            dispatch({type: ORDER_CREATE_ERROR, payload: err.response.data.error_message });
        }
    }
};

export const allOrders = () => {
    const user_id = localStorage.getItem('user_id');
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/users/${user_id}/orders`,
                { headers: { 'x-toprated-token': `${localStorage.getItem('token')}` } });
            dispatch({type: ORDER_ALL_ORDERS_SUCCESS, payload: res.data});
        }catch (err) {
            dispatch({type: ORDER_ALL_ORDERS_ERROR, payload: err.response ? err.response.data.error_message : ""})
        }
    }
};


export const getOrderDetails = (order_id) => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/orders/${order_id}`,
                { headers: { 'x-toprated-token': `${localStorage.getItem('token')}` } });
            dispatch({type: ORDER_GET_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: ORDER_GET_ERROR, payload: err.response.data.error_message})
        }
    }
};

export const deleteOrder = (id) => {
    return async (dispatch) => {
        dispatch({ type: BEFORE_STATE });
        try {
            const res = await axios.delete(`${API_ROUTE}/orders/${id}`,
                { headers: { 'x-toprated-token': `${localStorage.getItem('token')}` } });
            dispatch({type: DELETE_ORDER_SUCCESS, payload: { deletedID: id, message: res.data.response }});
            message.success("The order was deleted successfully");
            history.push('/order/index');
            window.location.reload();
        } catch(err) {
            dispatch({ type: DELETE_ORDER_ERROR, payload: err.response.data.error_message })
        }
    }
};

export const updateOrder = (updateDetails, updateSuccess) => {
    return async (dispatch) => {
        dispatch({ type: BEFORE_STATE });
        try {
            const res = await axios.put(`${API_ROUTE}/orders/${updateDetails.id}`, updateDetails,
                { headers: { 'x-toprated-token': `${localStorage.getItem('token')}` } });
            dispatch({type: UPDATE_ORDER_SUCCESS, payload: res.data});
            updateSuccess()
        } catch(err) {
            dispatch({ type: UPDATE_ORDER_ERROR, payload: err.response.data.error_message })
        }
    }
};

export const orderApproved = () => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/orders`);
            dispatch({type: ORDER_APPROVED_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: ORDER_APPROVED_ERROR, payload: err.response.data.error_message})
        }
    }
};

export const orderCompleted = () => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/orders`);
            dispatch({type: ORDER_COMPLETED_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: ORDER_COMPLETED_ERROR, payload: err.response.data.error_message})
        }
    }
};

export const orderInprogress = () => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/orders`);
            dispatch({type: ORDER_INPROGRESS_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: ORDER_INPROGRESS_ERROR, payload: err.response.data.error_message})
        }
    }
};

export const orderPending = () => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/orders`);
            dispatch({type: ORDER_PENDING_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: ORDER_PENDING_ERROR, payload: err.response.data.error_message})
        }
    }
};

export const orderRevision = () => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/orders`);
            dispatch({type: ORDER_REVISION_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: ORDER_REVISION_ERROR, payload: err.response.data.error_message})
        }
    }
};

export const orderRejected = () => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/games`);
            dispatch({type: ORDER_REJECTED_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: ORDER_REJECTED_ERROR, payload: err.response.data.error_message})
        }
    }
};

export const orderCancelled = () => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/orders`);
            dispatch({type: ORDER_CANCELLED_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: ORDER_CANCELLED_ERROR, payload: err.response.data.error_message})
        }
    }
};

export const orderWaitingAssign = () => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/orders`);
            dispatch({type: ORDER_WAITING_ASSIGN_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: ORDER_WAITING_ASSIGN_ERROR, payload: err.response.data.error_message})
        }
    }
};
