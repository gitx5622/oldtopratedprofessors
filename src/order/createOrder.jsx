import React from 'react'
import {Row, Col, Button} from 'shards-react';
import step1 from '../assets/step1.png';
import step2 from '../assets/step2.png';
import UploadFiles from './common/uploadInstructions';
import CreateForm from './common/createForm';

const CreateOrder = () => {
    return ( 
        <div className="createorder">
            <Row style={{paddingTop:"30px", marginLeft:"-36px"}}>
            <Col sm={4}>
            <h3>&nbsp;&nbsp;&nbsp;Create Order</h3>
            </Col>
            <Col sm={3}><h3>Price: $0.00</h3></Col>
            <Col sm={5}>
                <div className="form-group">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter promocode to get discount!"/>
                        <div className="input-group-append">
                            <Button theme="secondary" className="promocode-btn">Apply Code</Button>
                        </div>
                    </div>
                </div>
            </Col>
            </Row><br/>
            <Row>
                <Col sm={12}>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active order-color" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><img src={step1} alt="step1" width="30px"/>&nbsp;&nbsp;&nbsp;<strong>Fill in your Order Requirements</strong></a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link order-color" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><img src={step2} alt="step1" width="30px"/>&nbsp;&nbsp;&nbsp;<strong>Upload files</strong></a>
                </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <CreateForm/>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <UploadFiles/>
                </div>
                </div>
                </Col>
            </Row>
        </div>
     );
};
 
export default CreateOrder;