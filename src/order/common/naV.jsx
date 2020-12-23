import React, {useReducer} from "react";
import {Button, Nav, NavItem, NavLink} from "shards-react";
import { AiOutlineMinus, GrAdd } from 'react-icons/all';

const NaV = () => {
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
 const [ count, execute] = useReducer(reducer, initialState);

    if (count.page < 1){
        return initialState;
    }
    if (count.per < 275) {
        return initialState
    }
    return (
        <div>
        <Nav tabs>
            <NavItem>
                <NavLink className="order-color " href="/order/index">All orders</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="order-color" href="/order/pending">Pending</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="order-color" href="/order/waiting">Waiting assign</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="order-color" href="/order/inprogress">In Progress</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="order-color" href="/order/completed">Completed</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="order-color" href="/order/approved">Approved</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="order-color" href="/order/revision">Revision</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="order-color" href="/order/rejected">Rejected</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="order-color" href="/order/cancelled" active>Cancelled</NavLink>
            </NavItem>
        </Nav><br/>
            <div className="form-group">
                <center>
                   <label><strong>Pages&nbsp;&nbsp;({count.page}{count.page === 1 ? " page" : " pages"})</strong></label><br/>
                    <Button theme="secondary" disabled={count.page === 1} onClick={() => execute({type: 'DECREMENT'})} className="placeorder-btn" size="sm"><AiOutlineMinus/></Button>
                   &nbsp;&nbsp;{count.per} Words&nbsp;&nbsp;
                   <Button theme="secondary" disabled={count.page === 100 } onClick={() => execute({type: 'INCREMENT'})} className="placeorder-btn" size="sm"><GrAdd/></Button>
                </center>
            </div>
        </div>
    )
};
export default NaV;