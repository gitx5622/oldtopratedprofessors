import React from "react";
import {Nav, NavItem, NavLink} from "shards-react";

const NaV = () => {
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
        </div>
    )
};
export default NaV;