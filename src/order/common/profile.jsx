import React, {useState} from 'react';
import { Row, Col } from 'shards-react';
import { Steps, Button, message, Empty } from 'antd';

const { Step } = Steps;

const steps = [
    {
      title: 'Names',
      content: <div><div className="form-group">
                <label><strong>First Name</strong></label>
                <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                <label><strong>Last Name</strong></label>
                <input type="text" className="form-control"/>
                </div></div>,
      description: "Fill in your Names."
    },
    {
      title: 'Contact',
      content: <div><div className="form-group">
                <label><strong>Phone</strong></label>
                <input type="text" className="form-control"/>
                </div>
                 <div className="form-group">
                 <label><strong>Gender</strong></label>
                 <input type="text" className="form-control"/>
                </div></div>,
      description: "Fill in your personal details."
    },
    {
      title: 'Region',
      content: <div><div className="form-group">
                <label><strong>Country</strong></label>
                <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                <label><strong>City</strong></label>
                <input type="text" className="form-control"/>
                </div></div>,
      description: "Fill in your region details."
    },
  ];

const Profile = () => {

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return ( 
        <div style={{backgroundColor:"white",padding:"20px"}}>
            <Row style={{paddingTop:"30px", marginLeft:"-36px"}}>
            <Col>
            <h3>&nbsp;&nbsp;&nbsp;Profile</h3>
            </Col>
            </Row><br/>
             <form style={{position:"relative", zIndex:"1000"}}>
                <Row>
                <Col sm={3}>
                <Steps direction="vertical" current={current}>
                    {steps.map(item => (
                    <Step key={item.title} title={item.title} description={item.description}/>
                    ))}
                </Steps>
                    </Col>
                    <Col sm={9}>
                    <div className="steps-content">{steps[current].content}</div>
                    <div className="steps-action">
                        {current < steps.length - 1 && (
                        <Button className="placeorder-btn" type="primary" onClick={() => next()}>
                            Next
                        </Button>
                        )}
                        {current === steps.length - 1 && (
                        <Button className="placeorder-btn" type="primary" onClick={() => message.success('Filled you personal details successfully!')}>
                            Done
                        </Button>
                        )}
                        {current > 0 && (
                        <Button className="placeorder-btn" style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                        )}
                    </div><br/><br/><br/>
                        <table className="table">
                        <thead>
                            <tr className="table-success">
                            <th scope="col">Profile</th>
                            <th scope="col"/>
                            <th scope="col"/>
                            <th scope="col"/>
                            <th scope="col"/>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                        </table>
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    </Col>
                </Row>
                </form><br/>
        </div>
     );
};
 
export default Profile;