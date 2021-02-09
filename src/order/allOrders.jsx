import React, { useEffect } from 'react';
import { Card, CardBody, Row, Button, Col} from 'shards-react';
import { allOrders } from '../store/order/actions/orderActions';
import { useSelector, useDispatch } from 'react-redux';
import { Empty, Tag } from 'antd';
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

    const user_id = Object.values(JSON.parse(localStorage.getItem('user_data')));
    localStorage.setItem('user_id', user_id[0]);

    let orders = orderSelector.map(order => {
        return (
        <tr key={order.id} className="table-light">
        <td><Link to="/order/orderdetails">{order.id}</Link></td>
        <td>{order.order_number}</td>
        <td>{order.deadline}</td>
        <td>{order.type.name}</td>
        <td>{(order.amount).toFixed(2)}</td>
        <td><Tag color="volcano">{order.page.no_of_page}</Tag></td>
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
    <Card>
        <CardBody>
            <p className="text-muted">Recent Order:</p>
            <h5>Contemporary Issues in Marketing</h5>
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
         <th scope="col">Deadline</th>
         <th scope="col">Type</th>
         <th scope="col">Amount</th>
         <th scope="col">Pages</th>
         </tr>
     </thead>
     <tbody>
         {orders}
     </tbody>
     </table>
     </div>
     }
    {/*{orders.length === 0 ? null : <Pagination defaultCurrent={1} total={orders.length} pageSize={3}/>} */}
    </div>
    )
    
};
 
export default AllOrders;