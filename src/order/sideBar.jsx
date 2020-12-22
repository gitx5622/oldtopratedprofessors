import React from 'react';
import {
    GrAdd,
    AiOutlineWallet,
    MdAccountBalance,
    FiEdit,
    CgProfile,BsToggleOn,BsToggleOff,
    RiMoonClearFill,
    GiCancel,BiRevision,
    BiStopCircle,
    FaRegCheckCircle,
    GrCompliance,
    FaListUl
} from 'react-icons/all';
import { Card,ListGroup, ListGroupItem } from 'shards-react';
import { Tag, Spin } from 'antd';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

/* eslint-disable jsx-a11y/anchor-is-valid */
const SideBar = ({background, theme}) => {
    return ( 
        <div className="sidebar" style={{marginTop:"-6px"}}>
        <Card className="order-card1 d-none d-sm-block">
        <ListGroup>
            <ListGroupItem className="order-brand" style={{backgroundColor:"#fdaa8f", borderTopRightRadius:"unset"}}><h3><Link className="order-color1" to="/order/index"><img src={logo} width="270px" style={{marginTop:"-15px", marginBottom:"-25px"}} alt="logo"/></Link></h3></ListGroupItem>
            <ListGroupItem style={{backgroundColor:  '#ffffff'}}><FaListUl/>&nbsp;&nbsp;&nbsp;<Link className="order-color1" to="/order/index">Dashboard</Link></ListGroupItem>
            <ListGroupItem style={{backgroundColor:  '#ffffff'}}><GrAdd/>&nbsp;&nbsp;&nbsp;<Link className="order-color1" to="/order/createorder">Place Order</Link><Tag className="order-badge" color="volcano">12</Tag></ListGroupItem>
            <ListGroupItem style={{backgroundColor:  '#ffffff'}}><FiEdit/>&nbsp;&nbsp;&nbsp;<Link className="order-color1" to="/order/pending">Pending</Link><Tag className="order-badge" color="volcano">12</Tag></ListGroupItem>
            <ListGroupItem style={{backgroundColor:  '#ffffff'}}><AiOutlineWallet/>&nbsp;&nbsp;&nbsp;<Link className="order-color1" to="/order/waiting">WaitingTo Be Assigned</Link><Tag className="order-badge" color="volcano">$5.05</Tag></ListGroupItem>
            <ListGroupItem style={{backgroundColor:  '#ffffff'}}><Spin/>&nbsp;&nbsp;&nbsp;<Link className="order-color1" to="/order/inprogress">In Progress</Link><Tag className="order-badge" color="volcano">$5.05</Tag></ListGroupItem>
            <ListGroupItem style={{backgroundColor:  '#ffffff'}}><GrCompliance/>&nbsp;&nbsp;&nbsp;<Link className="order-color1" to="/order/completed">Completed</Link></ListGroupItem>
            <ListGroupItem style={{backgroundColor:  '#ffffff'}}><FaRegCheckCircle/>&nbsp;&nbsp;&nbsp;<Link className="order-color1" to="/order/approved">Approved</Link></ListGroupItem>
            <ListGroupItem style={{backgroundColor:  '#ffffff'}}><BiRevision/>&nbsp;&nbsp;&nbsp;<Link className="order-color1" to="/order/revision">Revision</Link><Tag className="order-badge" color="volcano">0</Tag></ListGroupItem>
            <ListGroupItem style={{backgroundColor:  '#ffffff'}}><BiStopCircle/>&nbsp;&nbsp;&nbsp;<Link className="order-color1" to="/order/rejected">Rejected</Link></ListGroupItem>
            <ListGroupItem style={{backgroundColor:  '#ffffff'}}><GiCancel/>&nbsp;&nbsp;&nbsp;<Link className="order-color1" to="/order/cancelled">Cancelled</Link></ListGroupItem>
            <ListGroupItem style={{backgroundColor:  '#ffffff'}}><CgProfile/>&nbsp;&nbsp;&nbsp;<Link className="order-color1" to="/order/profile">Profile</Link><Tag className="order-badge" color="volcano">$5.05</Tag></ListGroupItem>
            <ListGroupItem style={{backgroundColor:  '#ffffff'}}><MdAccountBalance/>&nbsp;&nbsp;&nbsp;<Link className="order-color1" to="/order/account">Account</Link></ListGroupItem>
            <ListGroupItem style={{backgroundColor:  '#ffffff', cursor:"pointer", borderTop:"solid 1px"}} onClick={background} ><RiMoonClearFill style={{color:"#68C798"}}/>&nbsp;&nbsp;&nbsp;Green Mode{theme === '#eaebef' ? <BsToggleOff className="order-badge" color="#000000" size="35px"/> : <BsToggleOn color="#68C798" className="order-badge" size="35px"/>}</ListGroupItem>
        </ListGroup>
        </Card>
        </div>
     );
};
 
export default SideBar;