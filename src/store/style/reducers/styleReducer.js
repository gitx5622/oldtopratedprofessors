import { STYLE_SUCCESS, STYLE_ERROR } from '../actionTypes/index'

export const initState = {
    style: [],
    isLoading: false,
    styleError: null
};


const styleReducer = (state = initState, action) => {
    switch(action.type) {

        // This is the state to set when the button is click and we are waiting for response
        case STYLE_SUCCESS:
            return {
                ...state,
                style: action.payload,
                isLoading: false,
                styleError: null

            };
        case STYLE_ERROR:
            return {
                ...state,
                isLoading: false,
                styleError: action.payload

            };

        default:
            return state;
    }
};

export default styleReducer
