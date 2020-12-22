import React, { Component } from 'react';
import { Container } from 'shards-react';
import { Card } from 'antd';
import { GrNext, GrPrevious } from 'react-icons/all';
import Slider from "react-slick";
import user from '../assets/icon_2.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Testimonials extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <GrNext style={{fontSize:"1000px"}}/>,
            prevArrow: <GrPrevious style={{fontSize:"1000px"}}/>,
            vertical: true,
            verticalSwiping: true,
            swipeToSlide: true,
            beforeChange: function(currentSlide, nextSlide) {
              console.log("before change", currentSlide, nextSlide);
            },
            afterChange: function(currentSlide) {
              console.log("after change", currentSlide);
            }
        }
        return (
            <div className="pt-4 testimonials" style={{backgroundColor:"#344754"}}>
            <div className="col-md-8 offset-md-2">
                <Container>
                <center>
                    <h3 className="text-white">Testimonials</h3>
                    <div className="underline"></div>
                </center>
                <Slider {...settings}>
          <div>
          <Card>
                    <center>
                    <img src={user} alt="ratings" style={{width:"40px",height:"40px", marginTop:"-7px"}}/>
                    <strong>Ashley, USA</strong><br/>
                                      
                        Customer Feedback: 5 / 5 <br/>
                        “I was desperate to complete an eleven-page paper within 24 hours. 
                        I could not do it with all the work I have to do at home with the kids
                         and job. Thank you so much, TopRatedProfessors.com, for coming to my 
                         help. I cannot thank you enough”
                    </center>
                </Card><br/>
          </div>
          <div>
          <Card>
                    <center>
                    <img src={user} alt="ratings" style={{width:"40px",height:"40px", marginTop:"-7px"}}/>
                    <strong>- Chris, UK</strong><br/>
                                      
                        Customer Feedback: 5 / 5 <br/>
                        “I have always had my assignments done by Professor Jay, and so far, 
                        he has been amazing. He’s always quick to respond to my queries and 
                        follows my instructions. I would recommend Professor Jay to any student 
                        stuck with any assignment. Great website, God bless you for saving us 
                        so much headache.”
                    </center>
                </Card><br/>
          </div>
          <div>
          <Card>
                    <center>
                    <img src={user} alt="ratings" style={{width:"40px",height:"40px", marginTop:"-7px"}}/>
                    <strong>- Burr, Canada</strong><br/>
                                      
                        Customer Feedback: 5 / 5 <br/>
                        “Oh, my God! You guys are amazing! I can’t believe I received a 97% 
                        on my computer science assignment. Thanks so much. I am excited. 
                        I highly recommend you guys. Thank you”
                    </center>
                </Card><br/>
          </div>
          <div>
          <Card>
                    <center>
                    <img src={user} alt="ratings" style={{width:"40px",height:"40px", marginTop:"-7px"}}/>
                        <strong>Jay</strong><br/>
                                      
                        Customer Feedback: 5 / 5 <br/>
                        “Oh, my God! You guys are amazing! I can’t believe I received a 97% 
                        on my computer science assignment. Thanks so much. I am excited. 
                        I highly recommend you guys. Thank you”
                    </center>
                </Card><br/>
          </div>
        </Slider>
                </Container>
                </div>
            </div>
        );
    }

}
export default Testimonials;