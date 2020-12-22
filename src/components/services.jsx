import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'shards-react';

const Services = () => {
    return ( 
        <div className="services">
            <Container>
                <center>
                <h3>Homework Help Services</h3>
                <div className="underline"></div>
                </center>
            <Row>
                <Col sm={3}>
                    <Card>
                        <CardBody>
                            <h5>Online Assignment Help</h5>
                        <p>
                        Do you need urgent help with your assignment? 
                        Topratedprofessors is your best help with 
                        all the solutions. We have the best essay 
                        writers from USA, UK, and Australia.
                        Our writers are professors in various fields, which
                        guarantees best grades
                        </p>
                        </CardBody>
                    </Card><br/>
                </Col>
                <Col sm={3}>
                    <Card>
                        <CardBody>
                            <h5>Essay Writing Help for Students</h5>
                            <p>
                            We will help you achieve your academic goals by 
                            customizing your essay according to your instructions. 
                            We have expert writers ready to take on any task given 
                            to them by students who have little or no time to handle
                             their assignments.
                            </p>
                        </CardBody>
                    </Card><br/>
                </Col>
                <Col sm={3}>
                    <Card>
                        <CardBody>
                            <h5>Best Dissertation Writing Online</h5>
                        <p>
                        We are a team of professors. We know exactly what 
                        you need in your dissertation, and we deliver exactly 
                        that. We do thorough research utilizing both primary 
                        and secondary scholarly articles to come up with the best
                         dissertation for you. 
                          </p>    
                        </CardBody>
                    </Card><br/>
                </Col>
                <Col sm={3}>
                    <Card>
                        <CardBody>
                            <h5>Online Academic Writing Services</h5>
                            <p>
                            At topratedprofessors, we have experts in various 
                            fields and subjects. If you are stuck with your essay, 
                            research paper, dissertation, lab report, math problem, 
                            book/movie critique, or any other assignment, just come
                             to us.
                            </p>
                        </CardBody>
                    </Card><br/>
                </Col>

            </Row>
            </Container>
        </div>
     );
}
 
export default Services;