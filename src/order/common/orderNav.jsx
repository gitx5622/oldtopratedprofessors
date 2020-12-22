import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SignOut} from "../../store/auth/actions/authActions";
import { Link } from 'react-router-dom';
import {Button, NavbarBrand} from "shards-react";
import { FaBars } from 'react-icons/fa';
import logo from "../../assets/logo.png";
import user from "../../assets/user_1.png";
import logoutimg from "../../assets/logout.png";
import wallet from "../../assets/wallet.png";
import bell from "../../assets/bell.png";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

/* eslint-disable jsx-a11y/anchor-is-valid */
const OrderNav = () => {
    const [showLinks, setShowLinks] = useState(false);

    const linksContainerRef = useRef(null);

    const linksRef = useRef(null);

    const currentState = useSelector((state) => state);

    const { isAuthenticated } = currentState.Auth;

    const dispatch = useDispatch();

    const logoutUser  = () => dispatch(SignOut());

    const logout = (e) => {
        e.preventDefault();
        logoutUser()
    };

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);

    const signInLinks = (
        <>
            <li style={{float:"right"}}><Link to="/login"><Button size="sm" outline theme="success">Login</Button></Link></li>
            <li style={{float:"right"}}><Link to="/register"><Button size="sm" theme="success">Sign Up</Button></Link></li>
        </>
    );
    const signOutLinks = (
        <a target="_blank" rel="noopener noreferrer" onClick={logout}>
            <img src={logoutimg} width="30px" alt="logo"/>&nbsp;&nbsp;&nbsp; Logout({currentState.Auth.currentUser.username}) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
    );
    const menu = (
        <Menu>
            <Menu.Item>
                <Link to="/order/profile">
                    <img src={user} width="30px" alt="logo"/>&nbsp;&nbsp;&nbsp; Profile
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/wallet/deposit">
                    <img src={wallet} width="30px" alt="logo"/>&nbsp;&nbsp;&nbsp; My Finances
                </Link>
            </Menu.Item>
            <Menu.Item>
                { isAuthenticated ? signOutLinks: signInLinks }
            </Menu.Item>
        </Menu>
    );
    const settings = (
        <Menu>
            <Menu.Item>
                <Link to="/order/profile">
                    <img src={user} width="30px" alt="logo"/>&nbsp;&nbsp;&nbsp; Profile &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/order/account">
                    <img src={user} width="30px" alt="logo"/>&nbsp;&nbsp;&nbsp; Account &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="main-navbar">
            <nav className="fixed-top">
                <div className='nav-center'>
                    <div className='nav-header'>
                        <NavbarBrand href="/"><img src={logo} width="270px" style={{marginTop:"-15px",marginLeft:"-70px"}} alt="logo"/></NavbarBrand>
                        <button className='nav-toggle' onClick={toggleLinks}>
                            <FaBars />
                        </button>
                    </div>
                    <div className='links-container' ref={linksContainerRef}>
                        <ul className='links' ref={linksRef}>
                                <li style={{float:"left"}}><Link to="/order/index">My Orders</Link></li>
                                <li style={{float:"left"}}><Link to="/order/createorder">Create Order</Link></li>
                                <Dropdown overlay={settings}>
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        Settings <DownOutlined />
                                    </a>
                                </Dropdown>
                                <li style={{float:"right",marginLeft:"350px"}}><Link to="/reviews"><img src={bell} alt="notification" width="37px"/></Link></li>
                                <li style={{float:"right", marginLeft:"20px"}}><Link to="/wallet/deposit"><img src={wallet} alt="wallet" width="37px"/>$0.00</Link></li>
                                <Dropdown overlay={menu}>
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        <img src={user} alt="wallet" width="37px"/> <DownOutlined />
                                    </a>
                                </Dropdown>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default OrderNav;