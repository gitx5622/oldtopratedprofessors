import { SOURCE_SUCCESS, SOURCE_ERROR } from '../actionTypes/index'

export const initState = {
    sources: [],
    isLoading: false,
    sourcesError: null
};


const sourceReducer = (state = initState, action) => {
    switch(action.type) {

        // This is the state to set when the button is click and we are waiting for response
        case SOURCE_SUCCESS:
            return {
                ...state,
                sources: action.payload,
                isLoading: false,
                sourceError: null

            };
        case SOURCE_ERROR:
            return {
                ...state,
                isLoading: false,
                sourcesError: action.payload

            };

        default:
            return state;
    }
};

export default sourceReducer
