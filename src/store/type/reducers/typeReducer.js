import { TYPE_SUCCESS, TYPE_ERROR } from '../actionTypes/index'

export const initState = {
    type: [],
    isLoading: false,
    typeError: null
};


const typeReducer = (state = initState, action) => {
    switch(action.type) {

        // This is the state to set when the button is click and we are waiting for response
        case TYPE_SUCCESS:
            return {
                ...state,
                type: [{ name: "Select Type of Paper (e.g Essay)" }, ...action.payload],
                isLoading: false,
                typeError: null

            };
        case TYPE_ERROR:
            return {
                ...state,
                isLoading: false,
                typeError: action.payload

            };

        default:
            return state;
    }
};

export default typeReducer
