import React from 'react'
import { Card, CardBody,Button } from 'shards-react';
import mcafee from '../../assets/mcafee.png';

const Calculator = () => {
    return ( 
        <div>
            <Card className="card2 animate__animated animate__tada">
                <CardBody>
                <h5><center>Calculate price <img src={mcafee} alt="mcafee" width="100px"/></center></h5>
                <form>

                    <div className="form-group">
                        <select className="form-control" id="exampleFormControlSelect1">
                        <option>Service</option>
                        </select>
                        </div>
                    <div className="form-group">
                        <select className="form-control" id="exampleFormControlSelect1">
                        <option>Type of Paper</option>
                        </select>
                        </div>
                    <div className="form-group">
                        <select className="form-control" id="exampleFormControlSelect1">
                        <option>Urgency</option>
                        </select>
                        </div>
                    <div className="form-group">
                        <select className="form-control" id="exampleFormControlSelect1">
                        <option>Pages</option>
                        </select>
                        </div>
                    <div className="form-group">
                        <select className="form-control" id="exampleFormControlSelect1">
                        <option>Level e.g High school</option>
                        </select>
                        </div>
                <center><p>Minimum Price:  $10</p></center>
                <center><a href="/order/index"><Button block size="sm" theme="success">Continue</Button></a></center>
                </form>
                </CardBody>
            </Card>
        </div>
     );
}
 
export default Calculator;