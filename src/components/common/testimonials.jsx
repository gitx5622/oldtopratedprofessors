import React from 'react'
import user from '../../assets/icon_2.png';

const Testimonials = () => {
    return ( 
        <div>
            <h3>Testimonials</h3><hr/>
            <div className="container-fluid">
                <ul>
                <li>
                <img src={user} alt="ratings" style={{width:"40px",height:"40px", marginTop:"-7px"}}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Love it.  Perfect addition to my paper.
                </li><hr/>
                <li>
                <img src={user} alt="ratings" style={{width:"40px",height:"40px", marginTop:"-7px"}}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Love it.  Perfect addition to my paper.
                </li><hr/>
                <li>
                <img src={user} alt="ratings" style={{width:"40px",height:"40px", marginTop:"-7px"}}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Great Job! Writer finished well before the assignment before the due date.
                </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Testimonials;