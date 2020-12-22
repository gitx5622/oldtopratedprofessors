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

    const [selected, setSelected] = React.useState("");
    const [minServicePrice, setMinServicePrice] = React.useState(8);
    const [minTypePrice, setMinTypePrice] = React.useState(0);
    const [minUrgencyPrice, setMinUrgencyPrice] = React.useState(0);
    const [minPagePrice, setMinPagePrice] = React.useState(0);
    const [minLevelPrice, setMinLevelPrice] = React.useState(0);
    console.log(selected);

    let myservice = 8;
    let mytype = 1;
    let myurgency = 1;
    let mypages = 1;
    let mylevel = 1;

    const parseServiceSelected = (event) => {
        const valueToParse = event.target.value;
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        if(itemSelected.name === 'Writing'){
            myservice = itemSelected.factor;
            setMinServicePrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === 'Rewriting'){
            myservice = itemSelected.factor;
            setMinServicePrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === 'Editing'){
            myservice = itemSelected.factor;
            setMinServicePrice (myservice * mylevel * mypages * myurgency * mytype)
        }
    };
    const parseTypeSelected = (event) => {
        const valueToParse = event.target.value;
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        if(itemSelected.name === 'Argumentative Essay'){
            mytype = itemSelected.factor;
            setMinTypePrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === 'Admission/Application Essay'){
            mytype = itemSelected.factor;
            setMinTypePrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === 'Annotated Bibliography'){
            mytype = itemSelected.factor;
            setMinTypePrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === 'Article Review/Critique'){
            mytype = itemSelected.factor;
            setMinTypePrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === 'Assignment'){
            mytype = itemSelected.factor;
            setMinTypePrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === 'Book Report/Review'){
            mytype = itemSelected.factor;
            setMinTypePrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === 'Article Review/Critique'){
            mytype = itemSelected.factor;
            setMinTypePrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === 'Article Review/Critique'){
            mytype = itemSelected.factor;
            setMinTypePrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === 'Article Review/Critique'){
            mytype = itemSelected.factor;
            setMinTypePrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === 'Article Review/Critique'){
            mytype = itemSelected.factor;
            setMinTypePrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === 'Article Review/Critique'){
            mytype = itemSelected.factor;
            setMinTypePrice (myservice * mylevel * mypages * myurgency * mytype)
        }
    };
    const parseUrgencySelected = (event) => {
        const valueToParse = event.target.value;
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        if(itemSelected.name === '3 hours'){
            myurgency = itemSelected.factor;
            setMinUrgencyPrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === '6 hours'){
            myurgency = itemSelected.factor;
            setMinUrgencyPrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === '12 hours'){
            myurgency = itemSelected.factor;
            setMinUrgencyPrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === '24 hours'){
            myurgency = itemSelected.factor;
            setMinUrgencyPrice (myservice * mylevel * mypages * myurgency * mytype)
        }
    };
    const parsePageSelected = (event) => {
        const valueToParse = event.target.value;
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        if(itemSelected.name === '275 words / 1 page'){
            mypages = itemSelected.factor;
            setMinPagePrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === '550 words / 2 pages'){
            mypages = itemSelected.factor;
            setMinPagePrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === '825 words / 3 pages'){
            mypages = itemSelected.factor;
            setMinPagePrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === '1100 words / 4 pages'){
            mypages = itemSelected.factor;
            setMinPagePrice (myservice * mylevel * mypages * myurgency * mytype)
        }
    };
    const parseLevelSelected = (event) => {
        const valueToParse = event.target.value;
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        if(itemSelected.name === 'High School'){
            mylevel = itemSelected.factor;
            setMinLevelPrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === 'College/Undergraduate'){
            mylevel = itemSelected.factor;
            setMinLevelPrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === 'Master'){
            mylevel = itemSelected.factor;
            setMinLevelPrice (myservice * mylevel * mypages * myurgency * mytype)
        }else if(itemSelected.name === 'Doctorate'){
            mylevel = itemSelected.factor;
            setMinLevelPrice (myservice * mylevel * mypages * myurgency * mytype)
        }
    };
    console.log(minServicePrice);
    console.log(minTypePrice);
    console.log(minUrgencyPrice);
    console.log(minPagePrice);
    console.log(minLevelPrice);
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
                                        onChange={parseServiceSelected}>
                                            {serviceSelector.map(service => { return (
                                                <option key={service.id} value={JSON.stringify(service)}>{service.name}</option>
                                            )})}
                                        </select>
                                        </div>
                                    <div className="form-group">
                                        <select className="form-control"
                                        onChange={parseTypeSelected}>
                                            {typeSelector.map(type => { return (
                                                <option key={type.id} value={JSON.stringify(type)}>{type.name}</option>
                                            )})}
                                        </select>
                                        </div>
                                    <div className="form-group">
                                        <select className="form-control"
                                        onChange={parseUrgencySelected}>
                                            {urgencySelector.map(urgency => { return (
                                                <option key={urgency.id} value={JSON.stringify(urgency)}>{urgency.name}</option>
                                            )})}
                                        </select>
                                        </div>
                                    <div className="form-group">
                                        <select className="form-control"
                                                onChange={parsePageSelected}>
                                            {pageSelector.map(page => { return (
                                                <option key={page.id} value={JSON.stringify(page)}>{page.name}</option>
                                            )})}
                                        </select>
                                        </div>
                                    <div className="form-group">
                                        <select className="form-control"
                                                onChange={parseLevelSelected}>
                                            {levelSelector.map(level => { return (
                                                <option key={level.id} value={JSON.stringify(level)}>{level.name}</option>
                                            )})}
                                        </select>
                                        </div>

                                        <center><p className="minimunPrice">Minimum Price : {(minServicePrice + minTypePrice + minUrgencyPrice + minPagePrice + minLevelPrice).toFixed(2)}</p></center>
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