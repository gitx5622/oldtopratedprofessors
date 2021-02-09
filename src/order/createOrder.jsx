import React, {useEffect} from 'react'
import UploadFiles from './common/uploadInstructions';
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
import {orderCreate} from "../store/order/actions/orderActions";
import {orderSpacing} from "../store/spacing/actions/spacingActions";
import {Button, Col, Row} from 'shards-react';
import step1 from '../assets/step1.png';
import step2 from '../assets/step2.png';
import 'tinymce/skins/content/default/content.min.css';
import 'tinymce/skins/ui/oxide/content.min.css';
import { Editor } from '@tinymce/tinymce-react';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/tinymce';
import 'tinymce/icons/default';
import 'tinymce/themes/silver';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/table';


const CreateOrder = () => {

    const [order, setOrder] = React.useState({
        user_id: '',
        service_id:'',
        type_id:'',
        style_id:'',
        level_id: '',
        pages_id:'',
        urgency_id:'',
        subject_id:'',
        sources_id:'',
        spacing_id:'',
        language_id:'',
        phone: '',
        topic: '',
        instructions: '',
        pagesummary:'',
        plagreport:'',
        initialdraft:'',
        qualitycheck:'',
        topwriter:'',
        promocode:'',
    });

    const addOrder = (credentials) => dispatch(orderCreate(credentials));

    const handleCreateOrderSubmit = (e) => {
        e.preventDefault();
        addOrder({
            user_id:        parseInt(localStorage.getItem('user_id')),
            service_id:     parseInt(order.service_id, 10),
            type_id:        parseInt(order.type_id,10),
            style_id:       parseInt(order.style_id,10),
            level_id:       parseInt(order.level_id,10),
            pages_id:       parseInt(order.pages_id,10),
            urgency_id:     parseInt(order.urgency_id,10),
            subject_id:     parseInt(order.subject_id,10),
            sources_id:     parseInt(order.sources_id,10),
            spacing_id:     parseInt(order.spacing_id,10),
            language_id:    parseInt(order.language_id,10),
            phone:          order.phone,
            topic:          order.topic,
            instructions:   contentEditor,
            pagesummary:    false,
            plagreport:     true,
            initialdraft:   false,
            qualitycheck:   false,
            topwriter:      true,
            promocode:'',
        });
    };

    const [selected, setSelected] = React.useState("");
    const [myservice, setmyservice] = React.useState(8);
    const [mytype, setmytype] = React.useState(1);
    const [myurgency, setmyurgency] = React.useState(1);
    const [mypages, setmypages] = React.useState(1);
    const [mylevel, setmylevel] = React.useState(1);
    const [myspacing, setmyspacing] = React.useState(1);
    const [contentEditor, setContentEditor] = React.useState();
    console.log(selected);

    const levelSelector = useSelector(state => state.Level.level);
    const pageSelector = useSelector(state => state.Page.page);
    const serviceSelector = useSelector(state => state.Service.service);
    const sourcesSelector = useSelector(state => state.Sources.sources);
    const spacingSelector = useSelector(state => state.Spacing.spacing);
    const styleSelector = useSelector(state => state.Style.style);
    const subjectSelector = useSelector(state => state.Subject.subject);
    const typeSelector = useSelector(state => state.Type.type);
    const urgencySelector = useSelector(state => state.Urgency.urgency);
    const languageSelector = useSelector(state => state.Language.language);

    const dispatch = useDispatch();

    const getAllLevels = () => dispatch(orderLevel());
    const getAllPages = () => dispatch(orderPages());
    const getAllSources = () => dispatch(orderSources());
    const getAllSpacings = () => dispatch(orderSpacing());
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
        getAllSpacings();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const parseServiceSelected = (event) => {
        const valueToParse = event.target.value;
        const service_id_index = Object.values(JSON.parse(valueToParse));
        const service_id = service_id_index[0];
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        setmyservice(itemSelected.factor);
        setOrder({
            ...order,
            [event.target.name]: service_id
        })
    };
    const parseTypeSelected = (event) => {
        const valueToParse = event.target.value;
        const type_id_index = Object.values(JSON.parse(valueToParse));
        const type_id = type_id_index[0];
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        setmytype(itemSelected.factor);
        setOrder({
            ...order,
            [event.target.name]: type_id
        })
    };
    const parseUrgencySelected = (event) => {
        const valueToParse = event.target.value;
        const urgency_id_index = Object.values(JSON.parse(valueToParse));
        const urgency_id = urgency_id_index[0];
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        setmyurgency(itemSelected.factor);
        setOrder({
            ...order,
            [event.target.name]: urgency_id
        })
    };
    const parsePageSelected = (event) => {
        const valueToParse = event.target.value;
        const page_id_index = Object.values(JSON.parse(valueToParse));
        const page_id = page_id_index[0];
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        setmypages(itemSelected.factor);
        setOrder({
            ...order,
            [event.target.name]: page_id
        })
    };
    const parseLevelSelected = (event) => {
        const valueToParse = event.target.value;
        const level_id_index = Object.values(JSON.parse(valueToParse));
        const level_id = level_id_index[0];
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        setmylevel(itemSelected.factor);
        setOrder({
            ...order,
            [event.target.name]: level_id
        })
    };
    const parseSpacingSelected = (event) => {
        const valueToParse = event.target.value;
        const spacing_id_index = Object.values(JSON.parse(valueToParse));
        const spacing_id = spacing_id_index[0];
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        setmyspacing(itemSelected.factor);
        setOrder({
            ...order,
            [event.target.name]: spacing_id
        })
    };

    const handleChange = event => {
        event.preventDefault();
        setOrder({
            ...order,
            [event.target.name]: event.target.value
        })
    };

    const handleEditorChange = (content) => {
        setContentEditor(content);
    };

    return ( 
        <div className="createorder">
            <Row style={{paddingTop:"13px", marginLeft:"-36px"}}>
            <Col sm={4}>
            <h5>&nbsp;&nbsp;&nbsp;Create Order</h5>
            </Col>
            <Col sm={3}><h5>Price: $ {(myservice * mytype * myurgency * mypages * mylevel *myspacing).toFixed(2)}</h5></Col>
            <Col sm={5}>
                <div className="form-group">
                    <div className="input-group">
                        <input name="promocode" type="text" className="form-control" placeholder="Enter promocode to get discount!"/>
                        <div className="input-group-append">
                            <Button theme="secondary" className="promocode-btn">Apply Code</Button>
                        </div>
                    </div>
                </div>
            </Col>
            </Row>
            <Row style={{marginTop:"-23px"}}>
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
                    <form style={{position:"relative", zIndex:"1000"}} onSubmit={handleCreateOrderSubmit}>
                        <Row>
                            <Col sm={3}>
                                <div className="form-group">
                                    <label><strong>Service</strong></label>
                                    <select name="service_id" onChange={parseServiceSelected} className="form-control">
                                        {serviceSelector.map(service => { return (
                                            <option key={service.id} value={JSON.stringify(service)}>{service.name}</option>
                                        )})}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label><strong>Type of Paper</strong></label>
                                    <select name="type_id" onChange={parseTypeSelected} className="form-control">
                                        {typeSelector.map(type => { return (
                                            <option key={type.id} value={JSON.stringify(type)}>{type.name}</option>
                                        )})}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label><strong>Urgency</strong></label>
                                    <select name="urgency_id" onChange={parseUrgencySelected} autoFocus className="form-control" id="exampleFormControlSelect1">
                                        {urgencySelector.map(urgency => { return (
                                            <option key={urgency.id} value={JSON.stringify(urgency)}>{urgency.name}</option>
                                        )})}
                                    </select>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className="form-group">
                                    <label><strong>Style</strong></label>
                                    <select name="style_id" onChange={handleChange} className="form-control">
                                        {styleSelector.map(style => { return (
                                            <option key={style.id} value={style.id}>{style.name}</option>
                                        )})}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label><strong>Sources</strong></label>
                                    <select name="sources_id" onChange={handleChange} className="form-control">
                                        {sourcesSelector.map(sources => { return (
                                            <option key={sources.id} value={sources.id}>{sources.name}</option>
                                        )})}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label><strong>Language</strong></label>
                                    <select onChange={handleChange} name="language_id" className="form-control">
                                        {languageSelector.map(language => { return (
                                            <option key={language.id} value={language.id}>{language.name}</option>
                                        )})}
                                    </select>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className="form-group">
                                    <label><strong>Level</strong></label>
                                    <select name="level_id" onChange={parseLevelSelected} className="form-control">
                                        {levelSelector.map(level => { return (
                                            <option key={level.id} value={JSON.stringify(level)}>{level.name}</option>
                                        )})}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label><strong>Pages</strong></label>
                                    <select name="pages_id" onChange={parsePageSelected} className="form-control">
                                        {pageSelector.map(page => { return (
                                            <option key={page.id} value={JSON.stringify(page)}>{page.name}</option>
                                        )})}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label><strong>Topic</strong></label>
                                    <input onChange={handleChange} name="topic" type="text" className="form-control" style={{width:"478px"}}/>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className="form-group">
                                    <label><strong>Subject</strong></label>
                                    <select onChange={handleChange} name="subject_id" className="form-control">
                                        {subjectSelector.map(subject => { return (
                                            <option key={subject.id} value={subject.id}>{subject.name}</option>
                                        )})}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label><strong>Phone</strong></label>
                                    <input onChange={handleChange} name="phone" type="text" className="form-control"/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <div className="form-group">
                                    <label><strong>Spacing</strong></label>
                                    <select onChange={parseSpacingSelected} name="spacing_id" className="form-control">
                                        {spacingSelector.map(spacing => { return (
                                            <option key={spacing.id} value={JSON.stringify(spacing)}>{spacing.name}</option>
                                        )})}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label><strong>Instructions</strong></label>
                                    {/*<input onChange={handleChange} name="instructions" type="text" className="form-control"/>*/}
                                    <Editor
                                        initialValue="<p></p>"
                                        init={{
                                            skin: false,
                                            content_css: false,
                                            height: 200,
                                            menubar: false,
                                            plugins: [
                                                'link image',
                                                'table paste'
                                            ],
                                            toolbar:
                                                'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
                                        }}
                                        value={contentEditor}
                                        onEditorChange={handleEditorChange}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Button type="submit" size="md" className="placeorder-btn order-color" outline theme="info">Create Order</Button>
                    </form>
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