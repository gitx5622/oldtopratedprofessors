import React, {useEffect, useState} from 'react';
import { Row, Col} from 'shards-react';
import {allOrders, deleteOrder} from '../store/order/actions/orderActions';
import { useSelector, useDispatch } from 'react-redux';
import { GrView, GrUpdate, AiFillDelete } from 'react-icons/all';
import { Link } from 'react-router-dom';
import { Tag, Popover, Modal } from 'antd';

/* eslint-disable jsx-a11y/anchor-is-valid */
const AllOrders = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const orderSelector = useSelector(state => state.Order.orders) || [];
    const dispatch = useDispatch();

    const getAllOrders = () => dispatch(allOrders());

    useEffect(() => {
        getAllOrders();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const user_id = Object.values(JSON.parse(localStorage.getItem('user_data')));
    localStorage.setItem('user_id', user_id[0]);

    const view = (
        "View"
    );
    const update = (
        "Update"
    );
    const deletex = (
        "Delete"
    );

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    // let orderSlice = orderSelector.slice(0, 1);
    // const recentOrderName = orderSlice[0].type.name;
    // const recentOrderDeadline = orderSlice[0].deadline;

    const orders = orderSelector.map(order => {
        return (
        <tr key={order.id} className="table-light">
            <td>{order.id}</td>
            <td><Link to={`/order/orderdetails/${order.id}`}>{order.order_number}</Link></td>
            <td>{order.deadline}</td>
            <td>{order.type.name}</td>
            <td><Tag color="blue">{order.page.no_of_page}</Tag></td>
            <td>{(order.amount).toFixed(2)}</td>
            <td>
                <Popover content={view}>
                    <Tag color="#87d068">
                        <a className="action-view" href={`/order/orderdetails/${order.id}`}><GrView/></a>
                    </Tag>
                </Popover>
                <Popover content={update}>
                <Tag color="#f50">
                    <a className="action-view" href={`/orders/${order.id}`}><GrUpdate/></a>
                </Tag>
                </Popover>
                <Popover content={deletex}>
                <Tag color="red">
                    <a className="action-view" onClick={showModal}><AiFillDelete/></a>
                </Tag>
                </Popover>
                <Modal title="Delete Order" visible={isModalVisible} onOk={() => dispatch(deleteOrder(order.id), handleOk())} onCancel={handleCancel}>
                    <p>Do you want to delete order this with order number {order.order_number}</p>
                </Modal>
            </td>
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
    {/*<Card>*/}
    {/*    <CardBody>*/}
    {/*        <p className="text-muted">Recent Order:</p>*/}
    {/*        <h5>recentOrderName</h5>*/}
    {/*        <ul className="order-links">*/}
    {/*            <li><img src={ ukFlag } width="30px" alt="usFlag"/> English</li>*/}
    {/*            <li><Button style={{color:"#000000", borderRadius: "20px", backgroundColor:" #beefd7"}} theme="success" size="sm">Completed</Button></li>*/}
    {/*            <li>Deadline:  recentOrderDeadline</li>*/}
    {/*            <li>5 days Remaining</li>*/}
    {/*        </ul>*/}
    {/*    </CardBody>*/}
    {/*</Card><br/>*/}
     <div>
     <table className="table">
     <thead>
         <tr className="table-success">
         <th scope="col">#</th>
         <th scope="col">Order No</th>
         <th scope="col">Deadline</th>
         <th scope="col">Type</th>
         <th scope="col">Pages</th>
         <th scope="col">Amount</th>
         <th scope="col">Actions</th>
         </tr>
     </thead>
     <tbody>
      {orders}
     </tbody>
     </table>
     </div>

    </div>
    )
    
};

export default AllOrders;