import React from 'react'
import { Row, Col, Nav, NavItem, NavLink } from 'shards-react';
import { Card, Empty } from 'antd';

const Promocodes = () => {
    return ( 
        <div>
            <Row style={{paddingTop:"30px", marginLeft:"-36px"}}>
            <Col>
            <h3>&nbsp;&nbsp;&nbsp;Promocodes</h3>
            </Col>
            </Row><br/>
            <Nav tabs>
                <NavItem>
                    <NavLink className="order-color" active href="/wallet/deposit">
                    Promocodes
                    </NavLink>
                </NavItem>
            </Nav>
            <Card>
                <h5>Enter Promocode</h5>
                <div className="row">
                <div className="col-sm-9">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Paypal"/>
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">Withdraw</span>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                <ul className="list-group">
                    <center>
                    <li className="list-group-item" style={{backgroundColor:"#BEEFD7"}}>Promocodes</li>
                    <li className="list-group-item"><center><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /></center></li>
                    </center>
                </ul><br/>
                </div>
                </div>
            </Card>
        </div>
     );
}
 
export default Promocodes;