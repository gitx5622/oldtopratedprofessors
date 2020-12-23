import { SERVICE_SUCCESS, SERVICE_ERROR } from '../actionTypes/index'

export const initState = {
    service: [],
    isLoading: false,
    serviceError: null
};


const serviceReducer = (state = initState, action) => {
    switch(action.type) {

        // This is the state to set when the button is click and we are waiting for response
        case SERVICE_SUCCESS:
            return {
                ...state,
                service: [{ name: "Select Service (e.g Writing)" }, ...action.payload],
                isLoading: false,
                serviceError: null

            };
        case SERVICE_ERROR:
            return {
                ...state,
                isLoading: false,
                serviceError: action.payload

            };

        default:
            return state;
    }
};

export default serviceReducer
