import React from 'react';
import { Row, Col, Nav, NavItem, NavLink  } from 'shards-react';
import TableColumn from './common/table';


const Approved = () => {
    return ( 
        <div>
            <Row style={{paddingTop:"30px", marginLeft:"-36px"}}>
            <Col>
            <h3>&nbsp;&nbsp;&nbsp;Approved</h3>
            </Col>
            </Row><br/>
            <Nav tabs>
            <NavItem>
                <NavLink className="order-color " href="/order/index">All orders</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="order-color" href="/order/pending">Pending</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="order-color" href="/order/waiting">Waiting assign</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="order-color" href="/order/inprogress">In Progress</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="order-color" href="/order/completed">Completed</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="order-color" href="/order/approved" active>Approved</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="order-color" href="/order/revision">Revision</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="order-color" href="/order/rejected">Rejected</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="order-color" href="/order/cancelled">Cancelled</NavLink>
            </NavItem>
        </Nav><br/>
           <TableColumn/>
        </div>
     );
};
 
export default Approved;