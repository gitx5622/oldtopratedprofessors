import React, {useEffect} from 'react'
import {Row, Col, Button} from 'shards-react';
import step1 from '../assets/step1.png';
import step2 from '../assets/step2.png';
import UploadFiles from './common/uploadInstructions';
// import {AiOutlineMinus, GrAdd} from "react-icons/all";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {useDispatch, useSelector} from "react-redux";
import {orderLevel} from "../store/level/actions/levelActions";
import {orderSources} from "../store/sources/actions/sourceActions";
import {orderStyle} from "../store/style/actions/styleActions";
import {orderSubject} from "../store/subject/actions/subjectActions";
import {orderTye} from "../store/type/actions/typeActions";
import {orderUrgency} from "../store/urgency/actions/urgencyActions";
import {orderService} from "../store/service/actions/serviceActions";
import {orderLanguage} from "../store/language/actions/languageActions";
import {orderPages} from "../store/pages/actions/pageActions";


const CreateOrder = () => {
    const [selected, setSelected] = React.useState("");
    const [myservice, setmyservice] = React.useState(8);
    const [mytype, setmytype] = React.useState(1);
    const [myurgency, setmyurgency] = React.useState(1);
    const [mypages, setmypages] = React.useState(1);
    const [mylevel, setmylevel] = React.useState(1);
    console.log(selected);

    const levelSelector = useSelector(state => state.Level.level);
    const pageSelector = useSelector(state => state.Page.page);
    const serviceSelector = useSelector(state => state.Service.service);
    const sourcesSelector = useSelector(state => state.Sources.sources);
    // const spacingSelector = useSelector(state => state.Spacing.spacing);
    const styleSelector = useSelector(state => state.Style.style);
    const subjectSelector = useSelector(state => state.Subject.subject);
    const typeSelector = useSelector(state => state.Type.type);
    const urgencySelector = useSelector(state => state.Urgency.urgency);
    const languageSelector = useSelector(state => state.Language.language);

    const dispatch = useDispatch();

    const getAllLevels = () => dispatch(orderLevel());
    const getAllPages = () => dispatch(orderPages());
    const getAllSources = () => dispatch(orderSources());
    // const getAllSpacings = () => dispatch(orderSpacing());
    const getAllStyles = () => dispatch(orderStyle());
    const getAllSubjects = () => dispatch(orderSubject());
    const getAllTypes = () => dispatch(orderTye());
    const getAllUrgencies = () => dispatch(orderUrgency());
    const getAllServices = () => dispatch(orderService());
    const getAllLanguages = () => dispatch(orderLanguage());

    useEffect(() => {
        getAllLevels();
        getAllPages();
        getAllSources();
        getAllStyles();
        getAllSubjects();
        getAllTypes();
        getAllUrgencies();
        getAllServices();
        getAllLanguages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
        <div className="createorder">
            <Row style={{paddingTop:"30px", marginLeft:"-36px"}}>
            <Col sm={4}>
            <h3>&nbsp;&nbsp;&nbsp;Create Order</h3>
            </Col>
            <Col sm={3}><h3>Price: $ {(myservice * mytype * myurgency * mypages * mylevel).toFixed(2)}</h3></Col>
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
            </Row>
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
                    <form style={{position:"relative", zIndex:"1000"}}>
                        <Row>
                            <Col sm={3}>
                                <div className="form-group">
                                    <label><strong>Service</strong></label>
                                    <select onChange={parseServiceSelected} className="form-control">
                                        {serviceSelector.map(service => { return (
                                            <option key={service.id} value={JSON.stringify(service)}>{service.name}</option>
                                        )})}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label><strong>Type of Paper</strong></label>
                                    <select onChange={parseTypeSelected} className="form-control">
                                        {typeSelector.map(type => { return (
                                            <option key={type.id}
                                                    value={JSON.stringify(type)}>{type.name}</option>
                                        )})}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label><strong>Urgency</strong></label>
                                    <select onChange={parseUrgencySelected} autoFocus className="form-control" id="exampleFormControlSelect1">
                                        {urgencySelector.map(urgency => { return (
                                            <option key={urgency.id}
                                                    value={JSON.stringify(urgency)}>{urgency.name}</option>
                                        )})}
                                    </select>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className="form-group">
                                    <label><strong>Styles</strong></label>
                                    <select className="form-control">
                                        {styleSelector.map(service => { return (
                                            <option>{service.name}</option>
                                        )})}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label><strong>Sources</strong></label>
                                    <select className="form-control">
                                        {sourcesSelector.map(service => { return (
                                            <option>{service.name}</option>
                                        )})}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label><strong>Language</strong></label>
                                    <select className="form-control">
                                        {languageSelector.map(service => { return (
                                            <option>{service.name}</option>
                                        )})}
                                    </select>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className="form-group">
                                    <label><strong>Level</strong></label>
                                    <select onChange={parseLevelSelected} className="form-control">
                                        {levelSelector.map(level => { return (
                                            <option key={level.id}
                                                    value={JSON.stringify(level)}>{level.name}</option>
                                        )})}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label><strong>Pages</strong></label>
                                    <select onChange={parsePageSelected} className="form-control">
                                        {pageSelector.map(page => { return (
                                            <option key={page.id}
                                                    value={JSON.stringify(page)}>{page.name}</option>
                                        )})}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label><strong>Topic</strong></label>
                                    <input type="text" className="form-control" style={{width:"478px"}}/>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className="form-group">
                                    <label><strong>Subject</strong></label>
                                    <select className="form-control">
                                        {subjectSelector.map(service => { return (
                                            <option>{service.name}</option>
                                        )})}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label><strong>Phone</strong></label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <div className="form-group">
                                    <label><strong>Instructions</strong></label>
                                    <CKEditor
                                        editor={ ClassicEditor }
                                        data=""
                                        onReady={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Button type="submit" size="md" className="placeorder-btn order-color" outline theme="info">Create Order</Button>
                    </form><br/>
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