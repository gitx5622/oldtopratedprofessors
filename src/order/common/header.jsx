import React from 'react';
import { Col, Button } from 'shards-react';
import profile from '../../assets/profile.png';
import { useSelector, useDispatch } from 'react-redux';
import { SignOut } from '../../store/auth/actions/authActions';
import { Link } from 'react-router-dom';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {
    const currentState = useSelector((state) => state);

    const { currentUser } = currentState.Auth;

    const dispatch = useDispatch();

    const logoutUser  = () => dispatch(SignOut());

    const logout = (e) => {
        e.preventDefault();
        logoutUser()
    };
    return ( 
        <div>
            <Col sm={1}/>
            <Col sm ={5}>
                <ul className="order-links">
                    <li>
                    <a href="/order/createorder">
                        <Button className="neworderbtn" color="white" theme="secondary" size="sm">
                            New Order
                        </Button>
                    </a>
                    </li>
                    <li>{currentUser.username}</li>
                    <li>
                    <Link to="/order/profile"><img src={profile} alt="profile" width="30px"/></Link>
                    </li>
                    <li>
                    <Button onClick={logout} className="neworderbtn" outline color="white" theme="secondary" size="sm">
                           Logout
                        </Button>
                    </li>
                </ul>
            </Col>
        </div>
     );
};
 
export default Header;