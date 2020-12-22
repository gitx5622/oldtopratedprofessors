import React, {useEffect} from 'react';
import { Card, CardBody, Col, Container, Row, Button } from 'shards-react';
import mcafee from '../assets/mcafee.png';
import check from '../assets/check.png';
import {useDispatch, useSelector} from "react-redux";
import {orderLevel} from "../store/level/actions/levelActions";
import {orderTye} from "../store/type/actions/typeActions";
import {orderUrgency} from "../store/urgency/actions/urgencyActions";
import {orderService} from "../store/service/actions/serviceActions";
import {orderPages} from "../store/pages/actions/pageActions";

const Carousel = () => {
    const levelSelector = useSelector(state => state.Level.level);
    const pageSelector = useSelector(state => state.Page.page);
    const serviceSelector = useSelector(state => state.Service.service);
    const typeSelector = useSelector(state => state.Type.type);
    const urgencySelector = useSelector(state => state.Urgency.urgency);

    const dispatch = useDispatch();

    const getAllLevels = () => dispatch(orderLevel());
    const getAllPages = () => dispatch(orderPages());
    const getAllTypes = () => dispatch(orderTye());
    const getAllUrgencies = () => dispatch(orderUrgency());
    const getAllServices = () => dispatch(orderService());

    useEffect(() => {
        getAllLevels();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        getAllTypes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        getAllUrgencies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        getAllServices();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        getAllPages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let defaultPrice = 8;
    let minPrice;

    const [selected, setSelected] = React.useState("");

    const parseSelected = (event) => {
        const valueToParse = event.target.value;
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
    };
    const calculatePrice = () => {
        if (selected.name === "Writing"){
            return minPrice === 8
        }else if (selected.name === "Rewriting"){
            return minPrice === 6
        }else {
            return minPrice === 5
        }
    };
    return ( 
        <div className="background">
            <Container>
                       <Row>
                           <Col sm={6}>
                                <Card className="card1 d-none d-sm-block animate__animated animate__pulse">
                                    <CardBody>
                                        <p className="back-card">
                                        Hire Experts to Do Your Assignment for You</p>
                                        <Row>
                                            <Col>
                                            <img src={check} alt="check" width="25px"/>&nbsp;&nbsp;&nbsp;A+ Quality Paper<br/>
                                            <img src={check} alt="check" width="25px"/>&nbsp;&nbsp;&nbsp;100% Written from &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scratch
                                            </Col>
                                            <Col>
                                            <p>
                                            <img src={check} alt="check" width="25px"/>&nbsp;&nbsp;&nbsp;On Time Delivery<br/>
                                            <img src={check} alt="check" width="25px"/>&nbsp;&nbsp;&nbsp;Unlimited Free Revisions
                                            </p>
                                            </Col>
                                        </Row>
                                        <center>
                                        <p>We are the best custom essay writers online.</p>
                                        <p className="bottom-card">100% SATISFACTION GUARANTEED</p>
                                        </center>
                                        <Row>
                                        <Col sm={6}><a href="/register"><Button theme="success">Sign Up</Button></a></Col>
                                        <Col sm={6}><a href="/order/index"><Button theme="success">Order Now</Button></a></Col>
                                        </Row>
                                    </CardBody> 
                                </Card>  
                            </Col>
                           <Col sm={2}/>
                           <Col sm={4}>
                           <Card className="card2 animate__animated animate__pulse">
                                <CardBody>
                                <h5><center>Calculate price <img src={mcafee} alt="mcafee" width="100px"/></center></h5>
                                <form>
                                    <div className="form-group">
                                        <select className="form-control"
                                        onChange={parseSelected}>
                                            {serviceSelector.map(service => { return (
                                                <option key={service.id} value={JSON.stringify(service)}>{service.name}</option>
                                            )})}
                                        </select>
                                        </div>
                                    <div className="form-group">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            {typeSelector.map(service => { return (
                                                <option>{service.name}</option>
                                            )})}
                                        </select>
                                        </div>
                                    <div className="form-group">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            {urgencySelector.map(service => { return (
                                                <option>{service.name}</option>
                                            )})}
                                        </select>
                                        </div>
                                    <div className="form-group">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            {pageSelector.map(service => { return (
                                                <option>{service.name}</option>
                                            )})}
                                        </select>
                                        </div>
                                    <div className="form-group">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            {levelSelector.map(service => { return (
                                                <option>{service.name}</option>
                                            )})}
                                        </select>
                                        </div>

                                        <center><p>Minimum Price: {selected ? calculatePrice() : defaultPrice}</p></center>
                                <center><a href="/order/index"><Button href="/order/index" block size="sm" theme="success">Continue</Button></a></center>
                                </form>
                                </CardBody>
                            </Card>
                           </Col>
                       </Row>
            </Container>
        </div>
     );
};
 
export default Carousel;