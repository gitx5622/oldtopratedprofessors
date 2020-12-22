import React from 'react';
import { Container, Button, Badge } from 'shards-react';
import { FaArrowRight, FiArrowDown } from 'react-icons/all';
import icon1 from '../assets/icon_1.png';
import icon2 from '../assets/icon_2.png';
import icon3 from '../assets/icon_3.png';
import icon4 from '../assets/icon_4.png';
import check from '../assets/check.png';

const HowItWorks = () => {
    return ( 
        <div className="howitworks">
        <Container>
        <center>
        <h3>How it works</h3>
        <div className="underline"></div>
        <ul className="howitworks-links">
            <li>
            <Badge className="badge-top" pill>
                1
            </Badge><br/><br/>
            <img src={icon1} alt="img1" width="70px"/>
            <p>We assign the writer</p>
            </li>
            <FaArrowRight className="howitworks-icons d-none d-sm-block"/>
            <FiArrowDown className="howitworks-icons d-block d-sm-none"/>
            <li>
            <Badge pill className="badge-top">
                2
            </Badge><br/><br/>
            <img src={icon2} alt="img1" width="70px"/>
            <p>The writer prepares sources for your work</p>
            </li>
            <FaArrowRight className="howitworks-icons d-none d-sm-block"/>
            <FiArrowDown className="howitworks-icons d-block d-sm-none"/>
            <li>
            <Badge pill className="badge-top">
                3
            </Badge><br/><br/>
            <img src={icon3} alt="img1" width="70px"/>
            <p>The writer completes your paper</p>
            </li>
            <FaArrowRight className="howitworks-icons d-none d-sm-block"/>
            <FiArrowDown className="howitworks-icons d-block d-sm-none"/>
            <li>
            <Badge pill className="badge-top">
                4
            </Badge><br/><br/>
            <img src={icon4} alt="img1" width="70px"/>
            <p>The writer polishes your paper</p>
            </li>
            <FaArrowRight className="howitworks-icons d-none d-sm-block"/>
            <FiArrowDown className="howitworks-icons d-block d-sm-none"/>
            <li>
            <Badge pill className="badge-top">
                5
            </Badge><br/><br/>
            <img src={check} alt="img1" width="70px"/>
            <p>We send the completed paper to you</p>
            </li>
        </ul>
        <a href="/order/index"><Button size="sm" theme="success">Order Now</Button></a>
        </center>
        </Container>
        </div>
     );
}
 
export default HowItWorks;