import React, {useEffect} from 'react';
import { Row, Col, Button } from 'shards-react';
import {useSelector, useDispatch} from "react-redux";
import {getOrderDetails} from "../store/order/actions/orderActions";

const OrderDetails = (props) => {
    const orderID = props.match.params.id;
    const order = useSelector(state => state.Order.order);
    const dispatch = useDispatch();
    const getOrder = (id) => dispatch(getOrderDetails(id));

    useEffect(() => {
        getOrder(orderID);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return ( 
        <div>
            <Row className="row-header" style={{paddingTop:"10px", marginLeft:"-36px"}}>
        </Row><br/>
    <Row>
        <Col sm={5}>
            <h3>Order #14654</h3>
        </Col>
        <Col sm={7}>
        <Button pill theme="secondary">
        Reserve Payment
      </Button>&nbsp;&nbsp;&nbsp;
      <Button pill theme="info">
        Update
      </Button>&nbsp;&nbsp;&nbsp;
      <Button pill theme="warning">
        Cancel
      </Button>&nbsp;&nbsp;&nbsp;
      <Button pill>Pay via PayPal</Button>
        </Col>
    </Row><br/>
        <table className="table">
  <thead style={{backgroundColor:"#fdaa8f"}}>
    <tr>
      <th scope="col">Order #14654</th>
      <th scope="col"/>
      <th scope="col"/>
      <th scope="col"/>
    </tr>
  </thead>
  <tbody className="table-success">
    <tr className="table-bordered">
      <td><strong>Order ID</strong></td>
      <td style={{backgroundColor:"white"}}><strong>{order.id}</strong></td>
      <td><strong>Topic</strong></td>
      <td style={{backgroundColor:"white"}}><strong>{order.topic}</strong></td>
    </tr>
    <tr className="table-bordered">
        <td><strong>Service</strong></td>
      <td style={{backgroundColor:"white"}}>{order.id}</td>
        <td><strong>Level</strong></td>
      <td style={{backgroundColor:"white"}}><strong>{order.level['name']}</strong></td>
    </tr>
    <tr className="table-bordered">
      <td><strong>Urgency</strong></td>
      <td style={{backgroundColor:"white"}}>{order.urgency['name']}</td>
        <td><strong>Client</strong></td>
      <td style={{backgroundColor:"white"}}><strong>{order.user['username']}</strong></td>
    </tr>
    <tr className="table-bordered">
      <td><strong>Subject</strong></td>
      <td style={{backgroundColor:"white"}}>{order.subject['name']}</td>
        <td><strong>Sources</strong></td>
      <td style={{backgroundColor:"white"}}><strong>{order.source['name']}</strong></td>
    </tr>
    <tr className="table-bordered">
        <td><strong>Phone Number</strong></td>
        <td style={{backgroundColor:"white"}}>{order.phone}</td>
        <td><strong>Spacing</strong></td>
        <td style={{backgroundColor:"white"}}><strong>{order.spacing['name']}</strong></td>
    </tr>
    <tr className="table-bordered">
        <td><strong>Type</strong></td>
        <td style={{backgroundColor:"white"}}>{order.type['name']}</td>
        <td><strong>Style</strong></td>
        <td style={{backgroundColor:"white"}}><strong>{order.style['name']}</strong></td>
    </tr>
    <tr className="table-bordered">
        <td><strong>Pages</strong></td>
        <td style={{backgroundColor:"white"}}>{order.page['name']}</td>
        <td><strong>Deadline</strong></td>
        <td style={{backgroundColor:"white"}}><strong>{order.deadline}</strong></td>
    </tr>
    <tr className="table-bordered">
        <td><strong>Language</strong></td>
        <td style={{backgroundColor:"white"}}>{order.language['name']}</td>
        <td><strong>Instructions</strong></td>
        <td style={{backgroundColor:"white"}}><strong>{order.instructions}</strong></td>
    </tr>
    <tr className="table-bordered">
        <td><strong>Amount</strong></td>
        <td style={{backgroundColor:"white"}}>{order.amount}</td>
    </tr>
  </tbody>
</table>
</div>
     );
};
 
export default OrderDetails;