import React from 'react';
import { Row, Col, Nav, NavItem, NavLink } from 'shards-react';
import TableColumn from './common/table';

const Revision = () => {
    return ( 
        <div>
            <Row style={{paddingTop:"30px", marginLeft:"-36px"}}>
            <Col>
            <h3>&nbsp;&nbsp;&nbsp;Revision</h3>
            </Col>
            </Row>
            <Nav tabs>
            <NavItem>
                <NavLink className="order-color" href="#" active>Revision</NavLink>
            </NavItem>
        </Nav><br/>
        <TableColumn/>
        </div>
     );
};
 
export default Revision;