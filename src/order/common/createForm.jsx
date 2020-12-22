import React, {useEffect, useReducer} from 'react'
import { Row, Col, Button } from 'shards-react';
import { GrAdd, AiOutlineMinus } from 'react-icons/all';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useDispatch, useSelector} from "react-redux";
// import {allOrders} from "../../store/order/actions/orderActions";
import {orderLevel} from "../../store/level/actions/levelActions";
// import {orderPages} from "../../store/pages/actions/pageActions";
import {orderSources} from "../../store/sources/actions/sourceActions";
// import {orderSpacing} from "../../store/spacing/actions/spacingActions";
import {orderStyle} from "../../store/style/actions/styleActions";
import {orderSubject} from "../../store/subject/actions/subjectActions";
import {orderTye} from "../../store/type/actions/typeActions";
import {orderUrgency} from "../../store/urgency/actions/urgencyActions";
import {orderService} from "../../store/service/actions/serviceActions";
import {orderLanguage} from "../../store/language/actions/languageActions";

const initialState = {
    page: 1,
    per: 275
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return {
            ...state,
            page: state.page + 1,
            per: state.per + 275
        };
        case 'DECREMENT':
        return {
            ...state,
            page: state.page - 1,  
            per: state.per - 275
        };
        default:
            return state;
    }
};
const CreateForm = () => {
    const [ count, execute] = useReducer(reducer, initialState);

    const levelSelector = useSelector(state => state.Level.level);
    console.log(levelSelector);
    // const pageSelector = useSelector(state => state.Page.page);
    const serviceSelector = useSelector(state => state.Service.service);
    const sourcesSelector = useSelector(state => state.Sources.sources);
    // const spacingSelector = useSelector(state => state.Spacing.spacing);
    // const styleSelector = useSelector(state => state.Style.style);
    // const subjectSelector = useSelector(state => state.Subject.subject);
    const typeSelector = useSelector(state => state.Type.type);
    const urgencySelector = useSelector(state => state.Urgency.urgency);
    const languageSelector = useSelector(state => state.Language.language);

    const dispatch = useDispatch();

    const getAllLevels = () => dispatch(orderLevel());
    // const getAllPages = () => dispatch(orderPages());
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
        getAllLevels();
        getAllSources();
        getAllStyles();
        getAllSubjects();
        getAllTypes();
        getAllUrgencies();
        getAllServices();
        getAllLanguages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (count.page < 1){
        return initialState;
    }
    if (count.per < 275) {
        return initialState
    }
    return ( 
        <div>
            <form style={{position:"relative", zIndex:"1000"}}>
                <Row>
                <Col sm={3}>
                <div className="form-group">
                    <label><strong>Service</strong></label>
                    <select autoFocus className="form-control" id="exampleFormControlSelect1">
                        {serviceSelector.map(service => { return (
                            <option>{service.name}</option>
                        )})}
                    </select>
                </div>
                <div className="form-group">
                <label><strong>Type of Paper</strong></label>
                    <select autoFocus className="form-control" id="exampleFormControlSelect1">
                        {typeSelector.map(service => { return (
                            <option>{service.name}</option>
                        )})}
                    </select>
                </div>
                <div className="form-group">
                <label><strong>Urgency</strong></label>
                    <select autoFocus className="form-control" id="exampleFormControlSelect1">
                        {urgencySelector.map(service => { return (
                            <option>{service.name}</option>
                        )})}
                    </select>
                </div>
                    </Col>
                    <Col sm={3}>
                <div className="form-group">
                <label><strong>Styles</strong></label>
                    <select autoFocus className="form-control" id="exampleFormControlSelect1">
                        {sourcesSelector.map(service => { return (
                            <option>{service.name}</option>
                        )})}
                    </select>
                </div>
                <div className="form-group">
                <label><strong>Sources</strong></label>
                    <select autoFocus className="form-control" id="exampleFormControlSelect1">
                        {sourcesSelector.map(service => { return (
                            <option>{service.name}</option>
                        )})}
                    </select>
                </div>
                <div className="form-group">
                    <label><strong>Language</strong></label>
                    <select autoFocus className="form-control" id="exampleFormControlSelect1">
                        {languageSelector.map(service => { return (
                            <option>{service.name}</option>
                        )})}
                    </select>
                </div>
                    </Col>
                    <Col sm={3}>
                <div className="form-group">
                <label><strong>Level</strong></label>
                    <select autoFocus className="form-control" id="exampleFormControlSelect1">
                        {levelSelector.map(level => { return (
                            <option key={level.id}>{level.name}</option>
                        )})}
                    </select>
                </div>
                <div className="form-group">
                <center>
                <label><strong>Pages&nbsp;&nbsp;({count.page}{count.page === 1 ? " page" : " pages"})</strong></label><br/>
                <Button theme="secondary" disabled={count.page === 1} onClick={() => execute({type: 'DECREMENT'})} className="placeorder-btn" size="sm"><AiOutlineMinus/></Button>
                    &nbsp;&nbsp;{count.per} Words&nbsp;&nbsp;
                <Button theme="secondary" disabled={count.page === 100 } onClick={() => execute({type: 'INCREMENT'})} className="placeorder-btn" size="sm"><GrAdd/></Button>
                </center>
                </div>
                <div className="form-group">
                    <label><strong>Language</strong></label>
                    <input type="text" className="form-control" style={{width:"478px"}}/>
                </div>
                </Col>
                <Col sm={3}>
                    <div className="form-group">
                        <label><strong>Subject</strong></label>
                        <select autoFocus className="form-control" id="exampleFormControlSelect1">
                            {sourcesSelector.map(service => { return (
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
     );
};
 
export default CreateForm;