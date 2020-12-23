import { PAGE_SUCCESS, PAGE_ERROR } from '../actionTypes/index'

export const initState = {
    page: [],
    isLoading: false,
    pageError: null
};


const pageReducer = (state = initState, action) => {
    switch(action.type) {

        // This is the state to set when the button is click and we are waiting for response
        case PAGE_SUCCESS:
            return {
                ...state,
                page: [{ name: "Select Pages (e.g 275 words / 1 page)" }, ...action.payload],
                isLoading: false,
                pageError: null

            };
        case PAGE_ERROR:
            return {
                ...state,
                isLoading: false,
                pageError: action.payload

            };

        default:
            return state;
    }
};

export default pageReducer
