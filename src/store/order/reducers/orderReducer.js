import { ORDER_ALL_ORDERS_ERROR, 
    ORDER_ALL_ORDERS_SUCCESS, 
    ORDER_APPROVED_ERROR, 
    ORDER_APPROVED_SUCCESS, 
    ORDER_CANCELLED_ERROR, 
    ORDER_CANCELLED_SUCCESS, 
    ORDER_COMPLETED_ERROR, 
    ORDER_COMPLETED_SUCCESS, 
    ORDER_INPROGRESS_ERROR, 
    ORDER_INPROGRESS_SUCCESS, 
    ORDER_PENDING_ERROR,
    ORDER_PENDING_SUCCESS,
    ORDER_REJECTED_ERROR, 
    ORDER_REJECTED_SUCCESS, 
    ORDER_REVISION_ERROR,
    ORDER_REVISION_SUCCESS, 
    ORDER_WAITING_ASSIGN_ERROR, 
    ORDER_WAITING_ASSIGN_SUCCESS } from '../actionTypes';

export const initState = {
    orders:[],
    approved: [],
    completed: [],
    pending:[],
    inprogress:[],
    rejected:[],
    revision:[],
    cancelled:[],
    waitingAssign:[],
    orderError: null,
    isLoading: false,
}


const orderReducer = (state = initState, action) => {
    switch(action.type) {

        // This is the state to set when the button is click and we are waiting for response
        case ORDER_ALL_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload,
                orderError: null

            }
        case ORDER_ALL_ORDERS_ERROR:
            return {
                ...state,
                isLoading: false,
                orderError: action.payload

            }
        case ORDER_APPROVED_SUCCESS:
            return {
                ...state,
                approved: action.payload,
                orderError: null

            }
        case ORDER_APPROVED_ERROR:
            return {
                ...state,
                isLoading: false,
                orderError: action.payload

            }
        case ORDER_COMPLETED_SUCCESS:
            return {
                ...state,
                completed: action.payload,
                orderError: null

            }
        case ORDER_COMPLETED_ERROR:
            return {
                ...state,
                isLoading: false,
                orderError: action.payload

            }
        case ORDER_INPROGRESS_SUCCESS:
            return {
                ...state,
                inprogress: action.payload,
                orderError: null

            }
        case ORDER_INPROGRESS_ERROR:
            return {
                ...state,
                isLoading: false,
                orderError: action.payload

            }
        case ORDER_PENDING_SUCCESS:
            return {
                ...state,
                pending: action.payload,
                orderError: null

            }
        case ORDER_PENDING_ERROR:
            return {
                ...state,
                isLoading: false,
                orderError: action.payload

            }
        case ORDER_REVISION_SUCCESS:
            return {
                ...state,
                revision: action.payload,
                orderError: null

            }
        case ORDER_REVISION_ERROR:
            return {
                ...state,
                isLoading: false,
                orderError: action.payload

            }
        case ORDER_REJECTED_SUCCESS:
            return {
                ...state,
                rejected: action.payload,
                orderError: null

            }
        case ORDER_REJECTED_ERROR:
            return {
                ...state,
                isLoading: false,
                orderError: action.payload

            }
        case ORDER_CANCELLED_SUCCESS:
            return {
                ...state,
                cancelled: action.payload,
                orderError: null

            }
        case ORDER_CANCELLED_ERROR:
            return {
                ...state,
                isLoading: false,
                orderError: action.payload

            }
        case ORDER_WAITING_ASSIGN_SUCCESS:
            return {
                ...state,
                waitingAssign: action.payload,
                orderError: null

            }
        case ORDER_WAITING_ASSIGN_ERROR:
            return {
                ...state,
                isLoading: false,
                orderError: action.payload

            }
        default:
            return state;
    }
}

export default orderReducer
