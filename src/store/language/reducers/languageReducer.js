import {LANGUAGE_ERROR, LANGUAGE_SUCCESS} from "../actionTypes";


export const initState = {
    language: [],
    isLoading: false,
    languageError: null
};


const languageReducer = (state = initState, action) => {
    switch(action.type) {

        // This is the state to set when the button is click and we are waiting for response
        case LANGUAGE_SUCCESS:
            return {
                ...state,
                language: action.payload,
                isLoading: false,
                languageError: null

            };
        case LANGUAGE_ERROR:
            return {
                ...state,
                isLoading: false,
                languageError: action.payload

            };

        default:
            return state;
    }
};

export default languageReducer
