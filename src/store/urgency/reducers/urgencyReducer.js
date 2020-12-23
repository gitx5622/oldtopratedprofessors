import { URGENCY_SUCCESS, URGENCY_ERROR } from '../actionTypes/index'

export const initState = {
    urgency: [],
    isLoading: false,
    urgencyError: null
};


const urgencyReducer = (state = initState, action) => {
    switch(action.type) {

        // This is the state to set when the button is click and we are waiting for response
        case URGENCY_SUCCESS:
            return {
                ...state,
                urgency: [{ name: "Select Urgency (e.g 10 days)" }, ...action.payload],
                isLoading: false,
                urgencyError: null

            };
        case URGENCY_ERROR:
            return {
                ...state,
                isLoading: false,
                urgencyError: action.payload

            };

        default:
            return state;
    }
};

export default urgencyReducer
