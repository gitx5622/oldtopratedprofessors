import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { SignIn } from "../store/auth/actions/authActions";
import {Row, Col, Button} from 'shards-react';
import NavBar from '../components/navbar';
import { Alert } from 'antd';


const LoginForm = () => {
  const currentState = useSelector((state) => state.Auth);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const userLogin = (credentials) => dispatch(SignIn(credentials));

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  
  const submitUser = (e) => {
    e.preventDefault();
    userLogin({
      email: user.email,
      password: user.password,
    });
  };

  if (currentState.isAuthenticated) {
    return <Redirect to="/" />;
  }
    return (
      <div>
        <NavBar/>
      <div className="login-form">
        <div className="col-md-4 offset-md-4">
        { currentState.loginError ? <Alert message={currentState.loginError} type="error" showIcon closable /> : ""}
          <center>
            <h3>Login</h3>
          </center>
          <form onSubmit={submitUser}>
              <div className="form-group">
                <input 
                type="email" 
                name="email"
                placeholder="Email"
                className="form-control" 
                id="email"
                onChange={handleChange} 
                />
              </div>
              <div className="form-group">
                <input 
                type="password" 
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="form-control" 
                id="password"/>
              </div>
              <Row>
              <Col>
              <Button
                  outline
                  theme="success"
                  type="submit"
                  className="btn btn-solid order-color"
                  name="login"
                  disabled={
                    user.email === "" ||
                    user.password === ""
                  }
                >
                  Login
                  </Button>
                </Col>
              <Col>
                <h6>Dont have an account    <a href="/register">Register</a></h6>
              </Col>
              </Row>   
            </form>
        </div>
        </div>
      </div>
    );
}

export default LoginForm;
