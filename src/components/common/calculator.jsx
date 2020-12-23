import React, {useEffect} from 'react'
import { Card, CardBody,Button } from 'shards-react';
import mcafee from '../../assets/mcafee.png';
import {useDispatch, useSelector} from "react-redux";
import {orderLevel} from "../../store/level/actions/levelActions";
import {orderPages} from "../../store/pages/actions/pageActions";
import {orderTye} from "../../store/type/actions/typeActions";
import {orderUrgency} from "../../store/urgency/actions/urgencyActions";
import {orderService} from "../../store/service/actions/serviceActions";

const Calculator = () => {
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
        getAllTypes();
        getAllUrgencies();
        getAllServices();
        getAllPages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [selected, setSelected] = React.useState("");
    const [myservice, setmyservice] = React.useState(8);
    const [mytype, setmytype] = React.useState(1);
    const [myurgency, setmyurgency] = React.useState(1);
    const [mypages, setmypages] = React.useState(1);
    const [mylevel, setmylevel] = React.useState(1);
    console.log(selected);

    const parseServiceSelected = (event) => {
        const valueToParse = event.target.value;
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        setmyservice(itemSelected.factor);
    };
    const parseTypeSelected = (event) => {
        const valueToParse = event.target.value;
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        setmytype(itemSelected.factor);
    };
    const parseUrgencySelected = (event) => {
        const valueToParse = event.target.value;
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        setmyurgency(itemSelected.factor);
    };
    const parsePageSelected = (event) => {
        const valueToParse = event.target.value;
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        setmypages(itemSelected.factor);
    };
    const parseLevelSelected = (event) => {
        const valueToParse = event.target.value;
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        setmylevel(itemSelected.factor);
    };
    return ( 
        <div>
            <Card className="card2 animate__animated animate__tada">
                <CardBody>
                <h5><center>Calculate price <img src={mcafee} alt="mcafee" width="100px"/></center></h5>
                    <form>
                        <div className="form-group">
                            <select className="form-control"
                                    defaultValue=""
                                    onChange={parseServiceSelected}>
                                {serviceSelector.map(service => {
                                    return (
                                        <option key={service.id} value={JSON.stringify(service)}>{service.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <select className="form-control"
                                    onChange={parseTypeSelected}>
                                {typeSelector.map(type => {
                                    return (
                                        <option key={type.id}
                                                value={JSON.stringify(type)}>{type.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <select className="form-control"
                                    onChange={parseUrgencySelected}>
                                {urgencySelector.map(urgency => {
                                    return (
                                        <option key={urgency.id}
                                                value={JSON.stringify(urgency)}>{urgency.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <select className="form-control"
                                    onChange={parsePageSelected}>
                                {pageSelector.map(page => {
                                    return (
                                        <option key={page.id}
                                                value={JSON.stringify(page)}>{page.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <select className="form-control"
                                    onChange={parseLevelSelected}>
                                {levelSelector.map(level => {
                                    return (
                                        <option key={level.id}
                                                value={JSON.stringify(level)}>{level.name}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <center><p className="minimunPrice"><strong>Minimum Price
                            : $ {(myservice * mytype * myurgency * mypages * mylevel).toFixed(2)}</strong></p></center>
                        <center><a href="/order/index"><Button href="/order/createorder" block size="sm"
                                                               theme="success">Continue</Button></a>
                        </center>
                    </form>
                </CardBody>
            </Card>
        </div>
     );
}
 
export default Calculator;