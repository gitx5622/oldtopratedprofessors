import axios from 'axios';
import API_ROUTE from "../../../utils/constants";
import {history} from "../../../utils/history";
import { BEFORE_STATE, SIGNUP_SUCCESS, SIGNUP_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS } from "../actionTypes/index";
import {Alert, message} from "antd";
import jwtdecode from 'jwt-decode';

// export const checkAuthTimeout = expirationTime => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(SignOut());
//         }, expirationTime * 1000);
//     };
// };

export const SignIn = (credentials) => {
    return async dispatch => {
        dispatch({type: BEFORE_STATE});
        try {
            const res = await axios.post(`${API_ROUTE}/sessions`, credentials);
            let userData = res.data;
            let userToken = res.headers['x-toprated-token'];
            const tokenInfo = jwtdecode(userToken);
            if (userToken && tokenInfo.user_id === userData.id){
            localStorage.setItem('session_id', tokenInfo.session_id);
            localStorage.setItem("token", userToken);
            localStorage.setItem('user_data', JSON.stringify(userData));
            dispatch({type: LOGIN_SUCCESS, payload: userData});
            history.push('/order/index');
            window.location.reload(true);
            message.success('You have successfully logged in.');
            }else if (tokenInfo.user_id !== userData.id) {
                <Alert message="Token is invalid" type="error" showIcon closable />
            }else {
                <Alert message="There was an error during logging in" type="error" showIcon closable />
            }
        }catch (err) {
            console.log(err.response);
            dispatch({type:LOGIN_ERROR, payload:  err.response.data.error_message})
        }
    }
};

export const SignOut = () => {
    return async(dispatch) => {
        try {
            const sessionID = localStorage.getItem("session_id");
            await axios.delete(`${API_ROUTE}/sessions/${sessionID}`,
            { headers: { 'x-toprated-token': `${localStorage.getItem('token')}` } });
            dispatch({ type: LOGOUT_SUCCESS });
            window.localStorage.clear(); //update the localstorage
            history.push('/login');
            window.location.reload(true);
        }catch (err) {
            message.error(`${err.response.data.error_message}`); 
            // window.localStorage.clear(); //update the localstorage
            // window.location.reload(true);
        }   
    }
};

export const SignUp = (newUser) => {
    return async (dispatch) => {
        dispatch({ type: BEFORE_STATE });
        try {
            const res = await axios.post(`${API_ROUTE}/register`, newUser);
            let userData = res.data;
            const userToken = res.headers['x-toprated-token'];
            const tokenInfo = jwtdecode(userToken);
            if (userToken && tokenInfo.user_id === userData.id){
            localStorage.setItem('session_id', tokenInfo.session_id);
            localStorage.setItem("token", userToken);
            localStorage.setItem('user_data', JSON.stringify(userData));
            dispatch({ type: SIGNUP_SUCCESS });
            history.push('/order/index');
            window.location.reload(true);
            }else if (tokenInfo.user_id !== userData.id) {
                <Alert message="Token is invalid" type="error" showIcon closable />
            }else {
                <Alert message="There was an error during registration" type="error" showIcon closable />
            }
        } catch(err) {
            dispatch({ type: SIGNUP_ERROR, payload: err.response.data.error_message })
        }
    }
};
