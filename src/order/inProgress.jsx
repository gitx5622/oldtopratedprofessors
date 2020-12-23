import React from 'react';
import { Row, Col, Nav, NavItem, NavLink } from 'shards-react';
import TableColumn from './common/table';


const InProgress = () => {
    return ( 
        <div>
            <Row style={{paddingTop:"30px", marginLeft:"-36px"}}>
            <Col>
            <h3>&nbsp;&nbsp;&nbsp;In Progress</h3>
            </Col>
            </Row>
            <Nav tabs>
            <NavItem>
                <NavLink className="order-color" href="#" active>In Progress</NavLink>
            </NavItem>
        </Nav><br/>
        <TableColumn/>
        </div>
     );
};
 
export default InProgress;