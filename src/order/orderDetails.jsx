import React from 'react';
import { Row, Col, Button } from 'shards-react';

const OrderDetails = () => {
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
      <td style={{backgroundColor:"white"}}><strong>@</strong></td>
      <td><strong>Topic</strong></td>
      <td style={{backgroundColor:"white"}}><strong>@</strong></td>
    </tr>
    <tr className="table-bordered">
        <td><strong>Service</strong></td>
      <td style={{backgroundColor:"white"}}>Writing</td>
        <td><strong>Instructions</strong></td>
      <td style={{backgroundColor:"white"}}><strong>@</strong></td>
    </tr>
    <tr className="table-bordered">
      <td><strong>Urgency</strong></td>
      <td style={{backgroundColor:"white"}}>@</td>
        <td><strong>Client</strong></td>
      <td style={{backgroundColor:"white"}}><strong>@</strong></td>
    </tr>
    <tr className="table-bordered">
      <td><strong>Subject</strong></td>
      <td style={{backgroundColor:"white"}}>@</td>
        <td><strong>Sources</strong></td>
      <td style={{backgroundColor:"white"}}><strong>@</strong></td>
    </tr>
    <tr className="table-bordered">
        <td><strong>Phone Number</strong></td>
        <td style={{backgroundColor:"white"}}>@</td>
        <td><strong>Deadline</strong></td>
        <td style={{backgroundColor:"white"}}><strong>@</strong></td>
    </tr>
    <tr className="table-bordered">
        <td><strong>Topic</strong></td>
        <td style={{backgroundColor:"white"}}>@</td>
        <td><strong>Instructions</strong></td>
        <td style={{backgroundColor:"white"}}><strong>@</strong></td>
    </tr>
    <tr className="table-bordered">
        <td><strong>Pages</strong></td>
        <td style={{backgroundColor:"white"}}>@</td>
        <td><strong>Level</strong></td>
        <td style={{backgroundColor:"white"}}><strong>@</strong></td>
    </tr>
    <tr className="table-bordered">
        <td><strong>Language</strong></td>
        <td style={{backgroundColor:"white"}}>@</td>
        <td><strong>Spacing</strong></td>
        <td style={{backgroundColor:"white"}}><strong>Writing</strong></td>
    </tr>
    <tr className="table-bordered">
        <td><strong>Amount</strong></td>
        <td style={{backgroundColor:"white"}}>$23.45</td>
    </tr>
  </tbody>
</table>
</div>
     );
};
 
export default OrderDetails;