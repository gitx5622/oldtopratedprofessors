import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import setAuthorizationToken from "./utils/authorization";
import { LOGIN_SUCCESS } from "./store/auth/actionTypes/index";
import reducer from "./store/combinedReducer";
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import 'antd/dist/antd.css';
import './index.css';


const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhances(applyMiddleware(thunk))
);

// when the page reloads, the auth user is still set
if (localStorage.token) {
  setAuthorizationToken(localStorage.token);
  let userData =
    localStorage.getItem("user_data") == null
      ? null
      : JSON.parse(localStorage.getItem("user_data"));
  store.dispatch({ type: LOGIN_SUCCESS, payload: userData }); //provided he has a valid token
}
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
