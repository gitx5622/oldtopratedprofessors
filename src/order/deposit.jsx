import React from 'react'
import { Row, Col, Nav, NavItem, NavLink, Button } from 'shards-react';
import { Link } from 'react-router-dom';
import { Card, Empty } from 'antd';

const Deposit = () => {
    return ( 
        <div>
            <Row style={{paddingTop:"30px", marginLeft:"-36px"}}>
            <Col>
            <h3>&nbsp;&nbsp;&nbsp;Balance: $0.00</h3>
            </Col>
            </Row><br/>
            <Nav tabs>
                <NavItem>
                    <NavLink active className="order-color" href="/wallet/deposit">
                    Deposits
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/wallet/withdraw" className="order-color">Withdraw Request</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/wallet/transaction" className="order-color">Transanctions</NavLink>
                </NavItem>
            </Nav>
            <Card>
                <h5>Deposits</h5>
                <div className="row">
                <div className="col-sm-9">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Paypal"/>
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">Paypal</span>
                    </div>
                    </div><br/><br/><br/>
                    <table className="table">
                    <thead>
                        <tr className="table-success">
                        <th scope="col">Amount</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                    </table>
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                </div>
                <div className="col-sm-3">
                <ul className="list-group">
                    <center>
                    <li className="list-group-item" style={{backgroundColor:"#BEEFD7"}}>Deposit</li>
                    <li className="list-group-item">$0.00</li>
                    <li className="list-group-item"><Link to="/wallet/withdraw"><Button className="placeorder-btn" theme="success">Withdraw</Button></Link></li>
                    <li className="list-group-item"><Link to="/wallet/transaction"><Button className="placeorder-btn" theme="success">Transactions</Button></Link></li>
                    </center>
                </ul><br/>
                </div>
                </div>
            </Card>
        </div>
     );
};
 
export default Deposit;