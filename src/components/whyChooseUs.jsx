import React, { useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'shards-react'
import satisfaction from '../assets/satisfaction.png';
import time from '../assets/wall-clock.png';
import email from '../assets/email.png';
import graduate from '../assets/graduate.png';
import plagarism from '../assets/safety.png';
import support from '../assets/customer-service.png';
import check from '../assets/check.png';
import confident from '../assets/envelope.png';
import guarantee from '../assets/confidence.png';
import writers from '../assets/writers.png';
import original from '../assets/original-stamp.png';

const WhyChooseUs = () => {

    const [className, setClassName] = useState("")

    const handleMouseOver = () => {
        setClassName("animate__animated animate__wobble")
    }
    return ( 
        <div className="pt-4">
        <Container>
            <Row>
                <Col sm={8}>
                <center>
                <h3>Why Choose Us</h3>
                <div className="underline"></div>
                </center>
                <p>
                Students go through a lot of challenges. Imagine having five assignments, 
                all due tonight. I bet you would break down as you figure out a way of 
                handling all of them. We understand the challenges students face and, as
                 such always seek to help whenever we can. Sometimes the fear of failing 
                 makes you not sure of what you are writing. Our experts take away that 
                 fear and handle the assignments for you. The final product is always 
                 topnotch and ready for submission. You only need to add your student 
                 details, and you are done. Did you have fun the whole weekend and forgot
                  that you had an assignment due on Monday? Don’t panic. As soon as you 
                  remember you have an assignment, come to us place your order and relax.
                   Our experts are experienced in working even under the tightest deadlines.
                    We always have a solution for you.
                </p>
                <p>
                The experience within our team guarantees you of quality work, 100% original 
                and on-time delivery. You would have no reason to panic if you hire a professor 
                to do your homework. We boast of helping over 100,000 students from across 
                the globe because they trust us with their assignments and we never fail to 
                deliver.
                </p>
                <h5>Features of Our Assignment Help : </h5>
                <Row>
                    <Col>
                    <Row>
                        <Col sm={2}>
                        <img src={time} alt="time" width="40px" height="40px"/>
                        </Col>
                        <Col sm={10}>
                        <strong><h6 className={className} onMouseOver={handleMouseOver}> On-Time Delivery</h6></strong>
                        <p>
                        Time is a crucial aspect of anyone’s life. As such, 
                        we never compromise when it comes to the deadline.
                        </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                        <img src={support} alt="time" width="40px" height="40px"/>
                        </Col>
                        <Col sm={10}>
                        <strong><h6 className={className} onMouseOver={handleMouseOver}>24/7 Customer Support</h6></strong>
                        <p>
                        Our world-class customer support team is always 
                        available at all times to respond to your queries.
                        </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                        <img src={plagarism} alt="time" width="40px" height="40px"/>
                        </Col>
                        <Col sm={10}>
                        <strong><h6 className={className} onMouseOver={handleMouseOver}>Plagiarism Free Work</h6></strong>
                        <p>
                        Our writers always write their work from scratch and 
                        always reference any materials they use to do their research.
                        </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                        <img src={graduate} alt="time" width="40px" height="40px"/>
                        </Col>
                        <Col sm={10}>
                        <strong><h6 className={className} onMouseOver={handleMouseOver}>Top Quality Work</h6></strong>
                        <p>
                        We always deliver the best to the customer. You come to us
                        for help because you trust that we will make your grade. 
                        We never disappoint.
                        </p>
                        </Col>
                    </Row>
                    </Col>
                    <Col>
                    <Row>
                        <Col sm={2}>
                        <img src={writers} alt="time" width="40px" height="40px"/>
                        </Col>
                        <Col sm={10}>
                        <strong><h6 className={className} onMouseOver={handleMouseOver}>500+ Writers </h6></strong>  
                        <p>
                        We have over 500 writers experienced in different 
                        fields and subjects. Out of the 500+, 153 are professors,
                        </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                        <img src={email} alt="time" width="40px" height="40px"/>
                        </Col>
                        <Col sm={10}>
                        <strong><h6 className={className} onMouseOver={handleMouseOver}>Email and SMS Updates</h6></strong>
                        <p>
                        We always inform you about the progress of your order right
                        from the start to completion through emails and SMS.
                        </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                        <img src={guarantee} alt="time" width="40px" height="40px"/>
                        </Col>
                        <Col sm={10}>
                        <strong><h6 className={className} onMouseOver={handleMouseOver}>100% Money-Back Guarantee.</h6></strong>
                        <p>
                        You can always get 100% of your money back if you do not get 
                        the service you wanted.
                        </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                        <img src={confident} alt="time" width="40px" height="40px"/>
                        </Col>
                        <Col sm={10}>
                        <strong><h6 className={className} onMouseOver={handleMouseOver}>100% Confidentiality</h6></strong>
                        <p>
                        We value your privacy and as such, protect your identity. 
                        We guarantee 100% anonymity whenever you visit our website.
                        </p>
                        </Col>
                    </Row>
                    </Col>
                </Row>
                </Col>
                <Col sm={4}>
                <Card className="animate__animated animate__tada animate__delay-4s">
                    <CardBody>
                        <center><h3>Top Rated Prof</h3>
                        <p><img src={check} alt="check" width="25px"/>&nbsp;&nbsp;&nbsp;Any Deadline - Any Subject</p>
                        <p><img src={check} alt="check" width="25px"/>&nbsp;&nbsp;&nbsp;Detailed Writer Profiles</p>
                        <p><img src={check} alt="check" width="25px"/>&nbsp;&nbsp;&nbsp;Chat With Your Writer</p>
                        <p><img src={check} alt="check" width="25px"/>&nbsp;&nbsp;&nbsp;Plagiarism Free Papers</p>
                        <p><img src={check} alt="check" width="25px"/>&nbsp;&nbsp;&nbsp;Email and SMS Notifications</p>
                        <img src={satisfaction} alt="moneyGuarantee"/>
                        </center>
                    </CardBody>
                </Card><br/><br/><br/><br/>
                <center><img src={original} alt="original" width="350px"/></center><br/><br/>
                </Col>
            </Row>
        </Container>
        </div>
     );
}
 
export default WhyChooseUs;