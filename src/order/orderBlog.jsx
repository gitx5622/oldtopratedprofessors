import React from 'react'
import { Row, Col } from 'shards-react';
import Header from './common/header';

const OrderBlog = () => {
    return ( 
        <div>
            <Row>
                <Col>
                <h3 className="order-color">&nbsp;&nbsp;&nbsp;Approved</h3>
                </Col>
                <Header/>
            </Row>
        </div>
     );
};
 
export default OrderBlog;