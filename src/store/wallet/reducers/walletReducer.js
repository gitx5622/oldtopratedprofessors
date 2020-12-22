import { PAYMENT_SUCCESS, PAYMENT_ERROR } from '../actionTypes/index'

export const initState = {
    wallet: "",
    isLoading: false,
    walletError: null
};


const walletReducer = (state = initState, action) => {
    switch(action.type) {

        // This is the state to set when the button is click and we are waiting for response
        case PAYMENT_SUCCESS:
            return {
                ...state,
                wallet: action.payload,
                isLoading: false,
                walletError: null

            };
        case PAYMENT_ERROR:
            return {
                ...state,
                isLoading: false,
                walletError: action.payload

            };

        default:
            return state;
    }
};

export default walletReducer
