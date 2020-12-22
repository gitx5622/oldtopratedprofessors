import React, { useState, useRef, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { SignOut } from '../store/auth/actions/authActions';
import { Button, NavbarBrand } from 'shards-react';
import { FaBars } from 'react-icons/fa';
import usFlag from "../assets/us.png";
import logo from "../assets/logo.png";

const NavBar = () => {
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
        <li><a href="/login"><Button size="sm" outline theme="success">Login</Button></a></li>
        <li><a href="/register"><Button size="sm" theme="success">Sign Up</Button></a></li>
    </>
  )
  const signOutLinks = (
        <li><a href="/login"><Button size="sm" onClick={logout} outline theme="success">Logout</Button></a></li>
  )
    return ( 
    <div className="main-navbar">
    <nav className="fixed-top">
      <div className='nav-center'>
        <div className='nav-header'>
        <NavbarBrand href="/"><img src={logo} width="270px" style={{marginTop:"-15px"}} alt="logo"/></NavbarBrand>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/">How it works</a></li>
            <li><a href="/reviews">Latest Reviews</a></li>
            <li><a href="/"><img src={usFlag} width="30px" height="30px" alt="usFlag"/> +1-814-250-1019</a></li>
            {/* <li><a href="/">support@doctorateessays.com</a></li> */}
            { isAuthenticated ? signOutLinks: signInLinks }
          </ul>
        </div>
      </div>
    </nav>
    </div>
     );
}
 
export default NavBar;