import { SUBJECT_SUCCESS, SUBJECT_ERROR } from '../actionTypes/index'

export const initState = {
    subject: [],
    isLoading: false,
    subjectError: null
};


const subjectReducer = (state = initState, action) => {
    switch(action.type) {

        // This is the state to set when the button is click and we are waiting for response
        case SUBJECT_SUCCESS:
            return {
                ...state,
                subject: action.payload,
                isLoading: false,
                subjectError: null

            };
        case SUBJECT_ERROR:
            return {
                ...state,
                isLoading: false,
                subjectError: action.payload

            };

        default:
            return state;
    }
};

export default subjectReducer
