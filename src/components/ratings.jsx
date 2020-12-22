import React from 'react'
import { Container, Row, Col } from 'shards-react';
import { Collapse, Breadcrumb } from 'antd';
import Calculator from './common/calculator'
import Testimonials from './common/testimonials'
import Footer from './footer'
import NavBar from './navbar';

const { Panel } = Collapse;

const Ratings = () => {
    const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
    `;
    return ( 
        <div className="pt-6">
            <NavBar/>
            <Container>
            <Row>
                <Col sm={8}><br/><br/><br/><br/>
                <Breadcrumb separator=">">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/reviews">Reviews and Ratings</Breadcrumb.Item>
                </Breadcrumb><br/>
                <center><h3>Reviews and Ratings</h3></center>
                <div className="underline"></div>
                <Collapse defaultActiveKey={['1']} accordion>
                    <Panel header="Order Number 1" key="1">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="Order Number 2" key="2">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="Order Number 3" key="3">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="Order Number 4" key="4">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="Order Number 5" key="5">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="Order Number 6" key="6">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="Order Number 7" key="7">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="Order Number 8" key="8">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="Order Number 9" key="9">
                    <p>{text}</p>
                    </Panel>
                </Collapse>
                </Col>
                <Col sm={4}>
                <Calculator/>
                <Testimonials/>
                </Col>
            </Row>
            </Container>
            <Footer/>
        </div>
     );
}
 
export default Ratings;