import React, { Component } from 'react';
import { GrNext, GrPrevious, BsArrowRight } from 'react-icons/all';
import { Container, Button, Row, Col } from 'shards-react';
import Slider from "react-slick";
import { Card } from 'antd';
import rating from '../assets/rating.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import user from '../assets/user.png';
import rrr from '../assets/rrr.png';
import www from '../assets/www.jpg';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <GrNext
        className={className}
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <GrPrevious
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }

class Reviews extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };
    return (
    <div className="reviewss" style={{backgroundColor:"#344754"}}>
    <div className="pt-5 pb-4 col-md-8 offset-md-2">
                <Container>
                <center>
                    <h3 className="text-white">Customer Reviews</h3>
                    <div className="underline"></div>
                    <p className="text-white">Avg rating for all reviews:</p> 
                </center>
        <Slider {...settings}>
          <div>
          <Card className="card-review">
        <Row>
            <Col sm={8}><ul style={{display:"flex"}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong><h6>Customer Feedback:</h6></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={rating} alt="ratings" 
                    style={{width:"100px", height:"20px"}}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong><h6>4.5 / 5</h6></strong>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img className="d-none d-sm-block" src={www} alt="ratings" style={{width:"40px", marginTop:"-50px"}}/>
                </ul>
                        Excellent work, thank you very much!
                        <br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Completed: 2 hours and 49 minutes ago
            </Col>
            <Col sm={4}>
            <div className="vertical-line d-none d-sm-block">
            <div className="vertical-inside">
                Editing and proofreading
            <br/><br/>
            <ul className="order-review">
            <li>
            <img src={user} alt="ratings" style={{width:"40px",height:"40px", marginTop:"7px"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Customer ID <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type of paper
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number of pages<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subject
            </li>
            </ul>
            </div>
            </div>
            </Col>
        </Row>   
        </Card><br/>
        <img src={rrr} alt="message" style={{position:"absolute", width:"40px",height:"40px", marginLeft:"700px", marginTop:"-25px"}}/>
          </div>
          <div>
          <Card className="card-review">
        <Row>
            <Col sm={8}><ul style={{display:"flex"}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong><h6>Customer Feedback:</h6></strong>&nbsp;&nbsp;&nbsp;<img src={rating} alt="ratings" 
                    style={{width:"100px", height:"20px"}}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong><h6>4.5 / 5</h6></strong>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img className="d-none d-sm-block" src={www} alt="ratings" style={{width:"40px", marginTop:"-50px"}}/>
                </ul>

                Excellent work, thank you very much!
                        <br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Completed: 2 hours and 49 minutes ago
            </Col>
            <Col sm={4}>
            <div className="vertical-line d-none d-sm-block">
            <div className="vertical-inside">
                Editing and proofreading
            <br/><br/>
            <ul className="order-review">
            <li>
            <img src={user} alt="ratings" style={{width:"40px",height:"40px", marginTop:"7px"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Customer ID <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type of paper
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number of pages<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subject</li>
            </ul>
            </div>
            </div>
            </Col>
        </Row>   
        </Card><br/>
        <img src={rrr} alt="message" style={{position:"absolute", width:"40px",height:"40px", marginLeft:"700px", marginTop:"-25px"}}/>
          </div>
          <div>
          <Card className="card-review">
        <Row>
            <Col sm={8}><ul style={{display:"flex"}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong><h6>Customer Feedback:</h6></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={rating} alt="ratings" 
                    style={{width:"100px", height:"20px"}}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong><h6>4.5 / 5</h6></strong>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img className="d-none d-sm-block"  src={www} alt="ratings" style={{width:"40px", marginTop:"-50px"}}/>
                </ul>
                Excellent work, thank you very much!
                        <br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Completed: 2 hours and 49 minutes ago
            </Col>
            <Col sm={4}>
           <div className="vertical-line d-none d-sm-block">
            <div className="vertical-inside">
                Editing and proofreading
            <br/><br/>
            <ul className="order-review">
            <li>
            <img src={user} alt="ratings" style={{width:"40px",height:"40px", marginTop:"7px"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Customer ID <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type of paper
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number of pages<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subject</li>
            </ul>
            </div>
            </div>
            </Col>
        </Row>   
        </Card><br/>
        <img src={rrr} alt="message" style={{position:"absolute", width:"40px",height:"40px", marginLeft:"700px", marginTop:"-25px"}}/>
          </div>
          <div>
          <Card className="card-review">
          <Row>
            <Col sm={8}><ul style={{display:"flex"}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong><h6>Customer Feedback:</h6></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={rating} alt="ratings" 
                    style={{width:"100px", height:"20px"}}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong><h6>4.8 / 5</h6></strong>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img className="d-none d-sm-block"  src={www} alt="ratings" style={{width:"40px", marginTop:"-50px"}}/>
                </ul>
                Excellent work, thank you very much!
                        <br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Completed: 2 hours and 49 minutes ago
            </Col>
            <Col sm={4}>           
            <div className="vertical-line d-none d-sm-block">
            <div className="vertical-inside">
                Editing and proofreading
            <br/><br/>
            <ul className="order-review">
            <li>
            <img src={user} alt="ratings" style={{width:"40px",height:"40px", marginTop:"7px"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Customer ID <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type of paper
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number of pages<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subject</li>
            </ul>
            </div>
            </div>
            </Col>
        </Row>   
        </Card><br/>
        <img src={rrr} alt="message" style={{position:"absolute", width:"40px",height:"40px", marginLeft:"700px", marginTop:"-25px"}}/>
          </div>
          <div>
          <Card className="card-review">
        <Row>
            <Col sm={8}><ul style={{display:"flex"}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong><h6>Customer Feedback:</h6></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={rating} alt="ratings" 
                    style={{width:"100px", height:"20px"}}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong><h6>4.8 / 5</h6></strong>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img className="d-none d-sm-block"  src={www} alt="ratings" style={{width:"40px", marginTop:"-50px"}}/>
                </ul>
                Excellent work, thank you very much!
                        <br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Completed: 2 hours and 49 minutes ago
            </Col>
            <Col sm={4}>           
            <div className="vertical-line d-none d-sm-block">
            <div className="vertical-inside">
                Editing and proofreading
            <br/><br/>
            <ul className="order-review">
            <li>
            <img src={user} alt="ratings" style={{width:"40px",height:"40px", marginTop:"7px"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Customer ID <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type of paper
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number of pages<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subject</li>
            </ul>
            </div>
            </div>
            </Col>
        </Row>   
        </Card><br/>
        <img src={rrr} alt="message" style={{position:"absolute", width:"40px",height:"40px", marginLeft:"700px", marginTop:"-25px"}}/>
        <br/>
          </div>
        </Slider><br/><br/>
                <center>
                <a href="/reviews"><Button size="sm" theme="success">Read Latest Reviews <BsArrowRight style={{ fontSize:"20px"}}/></Button></a>
                </center>
                </Container>
            </div>
            </div>
        );
    }

}
export default Reviews