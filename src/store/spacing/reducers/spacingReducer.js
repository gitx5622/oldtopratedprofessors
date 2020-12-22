import { SPACING_SUCCESS, SPACING_ERROR } from '../actionTypes/index'

export const initState = {
    spacing: [],
    isLoading: false,
    spacingError: null
};


const spacingReducer = (state = initState, action) => {
    switch(action.type) {

        // This is the state to set when the button is click and we are waiting for response
        case SPACING_SUCCESS:
            return {
                ...state,
                spacing: action.payload,
                isLoading: false,
                spacingError: null

            };
        case SPACING_ERROR:
            return {
                ...state,
                isLoading: false,
                spacingError: action.payload

            };

        default:
            return state;
    }
};

export default spacingReducer
