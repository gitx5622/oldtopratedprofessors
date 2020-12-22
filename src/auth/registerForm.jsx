import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { SignUp } from "../store/auth/actions/authActions";
import {Row, Col, Button} from 'shards-react';
import NavBar from '../components/navbar';
import { Alert } from 'antd';

const Register = () => {
  const currentState = useSelector((state) => state.Auth);

  const [user, setUser] = useState({
      first_name:'',
      last_name:'',
      username:'',
      email: '',
      password: '',
      password_confirmation:''
  });
  const dispatch = useDispatch();

  const addUser = (credentials) => dispatch(SignUp(credentials));

  const handleChange = e => {
      setUser({
          ...user,
          [e.target.name]: e.target.value
      })
  };
  const submitUser = (e) => {
      e.preventDefault();
      addUser({
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          email: user.email,
          password: user.password,
          password_confirmation: user.password_confirmation
      });
  };

  if(currentState.isAuthenticated){
    return <Redirect to='/' />
  }

    return (
      <div>
        <NavBar/>
      <div className="register-form">
        <div className="col-md-4 offset-md-4">
        { currentState.signupError ? <Alert message={currentState.signupError} type="error" showIcon closable /> : ""}
          <center>
            <h3>Register</h3>
          </center>
          <form onSubmit={submitUser}>
          <div className="form-group">
                <input 
                type="text" 
                name="first_name"
                placeholder="FirstName"
                className="form-control" 
                id="first_name"
                onChange={handleChange} 
                />
              </div>
              <div className="form-group">
                <input 
                type="text" 
                name="last_name"
                placeholder="LastName"
                className="form-control" 
                id="last_name"
                onChange={handleChange} 
                />
              </div>
              <div className="form-group">
                <input 
                type="text" 
                name="username"
                placeholder="Username"
                className="form-control" 
                id="username"
                onChange={handleChange} 
                />
              </div>
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
              <div className="form-group">
                <input 
                type="password" 
                name="password_confirmation"
                placeholder="Password Confirmation"
                onChange={handleChange}
                className="form-control" 
                id="password_confirmation"/>
              </div>
              <Row>
              <Col>
              <Button
                  outline
                  theme="success"
                  type="submit"
                  className="btn btn-solid order-color"
                  name="register"
                  disabled={
                    user.first_name === "" ||
                    user.last_name === "" ||
                    user.username === "" ||
                    user.email === "" ||
                    user.password === "" ||
                    user.password_confirmation === ""
                  }
                >
                  Register
                </Button>
                </Col>
              <Col>
                <h6>Already have an account   <a href="/login">Login</a></h6>
              </Col>
              </Row>
            </form>
        </div>
      </div>
      </div>
    );
}
export default Register;
