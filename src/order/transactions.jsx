import React from 'react'
import { Row, Col,Nav, NavItem, NavLink, Button } from 'shards-react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import TableColumn from './common/table';

const Transactions = () => {
    return ( 
        <div>
            <Row style={{paddingTop:"30px", marginLeft:"-36px"}}>
            <Col>
            <h3>&nbsp;&nbsp;&nbsp;Balance: $0.00</h3>
            </Col>
            </Row><br/>
            <Nav tabs>
                <NavItem>
                    <NavLink className="order-color" href="/wallet/deposit">
                    Deposits
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/wallet/withdraw" className="order-color">Withdraw Request</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink active href="/wallet/transaction" className="order-color">Transanctions</NavLink>
                </NavItem>
            </Nav>
            <Card>
                <h5>Transactions</h5>
                <div className="row">
                <div className="col-sm-9">
                <TableColumn/>
                </div>
                <div className="col-sm-3">
                <ul className="list-group">
                    <center>
                    <li className="list-group-item" style={{backgroundColor:"#BEEFD7"}}>Transactions</li>
                    <li className="list-group-item">$0.00</li>
                    <li className="list-group-item"><Link to="/wallet/deposit"><Button className="placeorder-btn" theme="success">Deposit</Button></Link></li>
                    <li className="list-group-item"><Link to="/wallet/withdraw"><Button className="placeorder-btn" theme="success">Withdraw</Button></Link></li>
                    </center>
                </ul><br/>
                </div>
                </div>
            </Card>
        </div>
     );
};
 
export default Transactions;