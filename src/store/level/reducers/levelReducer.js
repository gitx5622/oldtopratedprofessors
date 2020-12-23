import { LEVEL_SUCCESS, LEVEL_ERROR } from '../actionTypes/index'

export const initState = {
    level: [],
    isLoading: false,
    levelError: null
};


const levelReducer = (state = initState, action) => {
    switch(action.type) {

        // This is the state to set when the button is click and we are waiting for response
        case LEVEL_SUCCESS:
            return {
                ...state,
                level: [{ name: "Select Level (e.g High School)" }, ...action.payload],
                isLoading: false,
                levelError: null

            };
        case LEVEL_ERROR:
            return {
                ...state,
                isLoading: false,
                levelError: action.payload

            };

        default:
            return state;
    }
};

export default levelReducer
