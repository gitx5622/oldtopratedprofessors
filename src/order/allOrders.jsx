import React, { useEffect } from 'react';
import { Card, CardBody, Row, Button, Col,Nav, NavItem, NavLink } from 'shards-react';
import { allOrders } from '../store/order/actions/orderActions';
import { useSelector, useDispatch } from 'react-redux';
import { Empty, Tag, Pagination } from 'antd';
import usFlag from "../assets/us.png";
import { Link } from 'react-router-dom';

/* eslint-disable jsx-a11y/anchor-is-valid */
const AllOrders = () => {
    const orderSelector = useSelector(state => state.Order.orders);
    const dispatch = useDispatch();

    const getAllOrders = () => dispatch(allOrders());

    useEffect(() => {
        getAllOrders();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let orders = orderSelector.map(order => {
        return (
        <tr key={order.id} className="table-light">
        <td><Link to="/order/orderdetails">{order.order_id}</Link></td>
        <td>{order.type}</td>
        <td>{order.page}</td>
        <td>{order.amount}</td>
        <td><Tag color="volcano">{order.status}</Tag></td>
        </tr>
        )
    });
    return ( 
        <div>
        <Row className="row-header" style={{paddingTop:"30px", marginLeft:"-36px"}}>
            <Col>
            <h3>&nbsp;&nbsp;&nbsp;All Orders</h3>
            </Col>
        </Row>
        <Nav tabs>
            <NavItem>
                <NavLink className="order-color " href="#" active>All orders</NavLink>
            </NavItem>
        </Nav><br/>
    <Card>
        <CardBody>
            <p className="text-muted">Recent Order:</p>
            <h3>Contemporary Issues in Marketing</h3>
            <ul className="order-links">
                <li><img src={usFlag} width="30px" alt="usFlag"/> English</li>
                <li><Button style={{color:"#000000", borderRadius: "20px", backgroundColor:" #beefd7"}} theme="success" size="sm">Completed</Button></li>
                <li>Nov 6, 2020</li>
                <li>5 days Remaining</li>
            </ul>
        </CardBody>
    </Card><br/>
    {orderSelector.length === 0 ? <Card><CardBody><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /></CardBody></Card> :
     <div>
     <table className="table">
     <thead>
         <tr className="table-success">
         <th scope="col">#</th>
         <th scope="col">Order ID</th>
         <th scope="col">Type</th>
         <th scope="col">Pages</th>
         <th scope="col">Amount</th>
         <th scope="col">Status</th>
         </tr>
     </thead>
     <tbody>
         {orders}
     </tbody>
     </table>
     </div>
     }
    {orders.length === 0 ? null : <Pagination defaultCurrent={1} total={orders.length} pageSize={3}/>} 
    </div>
    )
    
};
 
export default AllOrders;