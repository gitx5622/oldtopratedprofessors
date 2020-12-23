import React from 'react';
import {
    GrAdd,
    AiOutlineWallet,
    FiEdit,
    BsToggleOn,BsToggleOff,
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
    const [activeD, setActiveD] = React.useState(false);
    const [activeP, setActiveP] = React.useState(false);
    const [activePending, setActivePending] = React.useState(false);
    const [activeWaiting, setActiveWaiting] = React.useState(false);
    const [activeInprogress, setActiveInprogress] = React.useState(false);
    const [activeCompleted, setActiveCompleted] = React.useState(false);
    const [activeApproved, setActiveApproved] = React.useState(false);
    const [activeRevision, setActiveRevision] = React.useState(false);
    const [activeRejected, setActiveRejected] = React.useState(false);
    const [activeCancelled, setActiveCancelled] = React.useState(false);
    const [backgroundColor, setBackgroundColor] = React.useState("ffffff");

    const handleDashboardOnClick = () => {
        setActiveD(!activeD);
        setActiveP(false);
        setActivePending(false);
        setActiveWaiting(false);
        setActiveInprogress(false);
        setActiveCompleted(false);
        setActiveApproved(false);
        setActiveRevision(false);
        setActiveRejected(false);
        setActiveCancelled(false);
        setBackgroundColor("#beefd7")
    };
    const handlePlaceOrderOnClick = () => {
        setActiveD(false);
        setActiveP(!activeP);
        setActivePending(false);
        setActiveWaiting(false);
        setActiveInprogress(false);
        setActiveCompleted(false);
        setActiveApproved(false);
        setActiveRevision(false);
        setActiveRejected(false);
        setActiveCancelled(false);
    };
    const handlePendingOnClick = () => {
        setActiveD(false);
        setActiveP(false);
        setActivePending(!activePending);
        setActiveWaiting(false);
        setActiveInprogress(false);
        setActiveCompleted(false);
        setActiveApproved(false);
        setActiveRevision(false);
        setActiveRejected(false);
        setActiveCancelled(false);
    };
    const handleWaitingOnClick = () => {
        setActiveD(false);
        setActiveP(false);
        setActivePending(false);
        setActiveWaiting(!activeWaiting);
        setActiveInprogress(false);
        setActiveCompleted(false);
        setActiveApproved(false);
        setActiveRevision(false);
        setActiveRejected(false);
        setActiveCancelled(false);
    };
    const handleInProgressOnClick = () => {
        setActiveD(false);
        setActiveP(false);
        setActivePending(false);
        setActiveWaiting(false);
        setActiveInprogress(!activeInprogress);
        setActiveCompleted(false);
        setActiveApproved(false);
        setActiveRevision(false);
        setActiveRejected(false);
        setActiveCancelled(false);
    };
    const handleCompletedOnClick = () => {
        setActiveD(false);
        setActiveP(false);
        setActivePending(false);
        setActiveWaiting(false);
        setActiveInprogress(false);
        setActiveCompleted(!activeCompleted);
        setActiveApproved(false);
        setActiveRevision(false);
        setActiveRejected(false);
        setActiveCancelled(false);
    };
    const handleApprovedOnClick = () => {
        setActiveD(false);
        setActiveP(false);
        setActivePending(false);
        setActiveWaiting(false);
        setActiveInprogress(false);
        setActiveCompleted(false);
        setActiveApproved(!activeApproved);
        setActiveRevision(false);
        setActiveRejected(false);
        setActiveCancelled(false);
    };
    const handleRevisionOnClick = () => {
        setActiveD(false);
        setActiveP(false);
        setActivePending(false);
        setActiveWaiting(false);
        setActiveInprogress(false);
        setActiveCompleted(false);
        setActiveApproved(false);
        setActiveRevision(!activeRevision);
        setActiveRejected(false);
        setActiveCancelled(false);
    };
    const handleRejectedOnClick = () => {
        setActiveD(false);
        setActiveP(false);
        setActivePending(false);
        setActiveWaiting(false);
        setActiveInprogress(false);
        setActiveCompleted(false);
        setActiveApproved(false);
        setActiveRevision(false);
        setActiveRejected(!activeRejected);
        setActiveCancelled(false);
    };
    const handleCancelledOnClick = () => {
        setActiveD(false);
        setActiveP(false);
        setActivePending(false);
        setActiveWaiting(false);
        setActiveInprogress(false);
        setActiveCompleted(false);
        setActiveApproved(false);
        setActiveRevision(false);
        setActiveRejected(false);
        setActiveCancelled(!activeCancelled);
    };
    return ( 
        <div className="sidebar" style={{marginTop:"-6px"}}>
        <Card className="order-card1 d-none d-sm-block">
        <ListGroup style={{borderBottomRightRadius:"unset"}}>
            <ListGroupItem className="order-brand" style={{backgroundColor:"#fdaa8f", borderTopRightRadius:"unset"}}><h3><Link className="order-color1" to="/order/index"><img src={logo} width="270px" style={{marginTop:"-15px", marginBottom:"-25px"}} alt="logo"/></Link></h3></ListGroupItem>
            <Link className="order-color1" to="/order/index"><ListGroupItem active={activeD} onClick={handleDashboardOnClick} style={{color:"#000000", backgroundColor: backgroundColor, borderTopRightRadius:"unset",borderBottomRightRadius:"unset"}}><FaListUl/>&nbsp;&nbsp;&nbsp;Dashboard</ListGroupItem></Link>
            <Link className="order-color1" to="/order/createorder"><ListGroupItem active={activeP} onClick={handlePlaceOrderOnClick} style={{color:"#000000", backgroundColor:  '#ffffff', borderTopRightRadius:"unset",borderBottomRightRadius:"unset"}}><GrAdd/>&nbsp;&nbsp;&nbsp;Place Order<Tag className="order-badge" color="volcano">12</Tag></ListGroupItem></Link>
            <Link className="order-color1" to="/order/pending"><ListGroupItem active={activePending} onClick={handlePendingOnClick} style={{color:"#000000", backgroundColor:  '#ffffff', borderTopRightRadius:"unset",borderBottomRightRadius:"unset"}}><FiEdit/>&nbsp;&nbsp;&nbsp;Pending<Tag className="order-badge" color="volcano">12</Tag></ListGroupItem></Link>
            <Link className="order-color1" to="/order/waiting"><ListGroupItem active={activeWaiting} onClick={handleWaitingOnClick} style={{color:"#000000", backgroundColor:  '#ffffff', borderTopRightRadius:"unset",borderBottomRightRadius:"unset"}}><AiOutlineWallet/>&nbsp;&nbsp;&nbsp;WaitingTo Be Assigned<Tag className="order-badge" color="volcano">$5.05</Tag></ListGroupItem></Link>
            <Link className="order-color1" to="/order/inprogress"><ListGroupItem active={activeInprogress} onClick={handleInProgressOnClick} style={{color:"#000000", backgroundColor:  '#ffffff', borderTopRightRadius:"unset",borderBottomRightRadius:"unset"}}><Spin/>&nbsp;&nbsp;&nbsp;In Progress<Tag className="order-badge" color="volcano">$5.05</Tag></ListGroupItem></Link>
            <Link className="order-color1" to="/order/completed"><ListGroupItem active={activeCompleted} onClick={handleCompletedOnClick} style={{color:"#000000", backgroundColor:  '#ffffff', borderTopRightRadius:"unset",borderBottomRightRadius:"unset"}}><GrCompliance/>&nbsp;&nbsp;&nbsp;Completed</ListGroupItem></Link>
            <Link className="order-color1" to="/order/approved"><ListGroupItem active={activeApproved} onClick={handleApprovedOnClick} style={{color:"#000000", backgroundColor:  '#ffffff', borderTopRightRadius:"unset",borderBottomRightRadius:"unset"}}><FaRegCheckCircle/>&nbsp;&nbsp;&nbsp;Approved</ListGroupItem></Link>
            <Link className="order-color1" to="/order/revision"><ListGroupItem active={activeRevision} onClick={handleRevisionOnClick} style={{color:"#000000", backgroundColor:  '#ffffff', borderTopRightRadius:"unset",borderBottomRightRadius:"unset"}}><BiRevision/>&nbsp;&nbsp;&nbsp;Revision<Tag className="order-badge" color="volcano">0</Tag></ListGroupItem></Link>
            <Link className="order-color1" to="/order/rejected"><ListGroupItem active={activeRejected} onClick={handleRejectedOnClick} style={{color:"#000000", backgroundColor:  '#ffffff', borderTopRightRadius:"unset",borderBottomRightRadius:"unset"}}><BiStopCircle/>&nbsp;&nbsp;&nbsp;Rejected</ListGroupItem></Link>
            <Link className="order-color1" to="/order/cancelled"><ListGroupItem active={activeCancelled} onClick={handleCancelledOnClick} style={{color:"#000000", backgroundColor:  '#ffffff', borderTopRightRadius:"unset",borderBottomRightRadius:"unset"}}><GiCancel/>&nbsp;&nbsp;&nbsp;Cancelled</ListGroupItem></Link>
            <ListGroupItem style={{borderBottomRightRadius:"unset", backgroundColor:  '#ffffff', cursor:"pointer", borderTop:"solid 1px"}} onClick={background} ><RiMoonClearFill style={{color:"#68C798"}}/>&nbsp;&nbsp;&nbsp;Green Mode{theme === '#eaebef' ? <BsToggleOff className="order-badge" color="#000000" size="35px"/> : <BsToggleOn color="#68C798" className="order-badge" size="35px"/>}</ListGroupItem>
        </ListGroup>
        </Card>
        </div>
     );
};
 
export default SideBar;