import React from 'react';
import NavBar from './navbar';
import Calculator from './common/calculator';
import Footer from './footer';
import blog1 from '../assets/blog1.jpg';

const Blog = () => {
    return ( 
        <div>
            <NavBar/><br/><br/><br/><br/>
            <div className="container">
            <div className="row">
                <div className="col-md-8 col-xs-12">
                <center>
                    <h3>Blog</h3>
                    <div className="underline"></div>
                </center>
                <ul className="list-unstyled">
                <li className="media mediabody1">
                    <img src={blog1} className="mr-3" alt="" width="250px"/>
                    <div className="media-body">
                    <h5 className="mt-0 mb-1">List-based media object</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>
                <li className="media mediabody1 my-4">
                    <img src={blog1} className="mr-3" alt="" width="250px"/>
                    <div className="media-body">
                    <h5 className="mt-0 mb-1">List-based media object</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>
                <li className="media mediabody1">
                    <img src={blog1} className="mr-3" alt="" width="250px"/>
                    <div className="media-body">
                    <h5 className="mt-0 mb-1">List-based media object</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>
                <li className="media mediabody1">
                    <img src={blog1} className="mr-3" alt="" width="250px"/>
                    <div className="media-body">
                    <h5 className="mt-0 mb-1">List-based media object</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>
                <li className="media mediabody1 my-4">
                    <img src={blog1} className="mr-3" alt="" width="250px"/>
                    <div className="media-body">
                    <h5 className="mt-0 mb-1">List-based media object</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>
                </ul>
                </div>
                <div className="col-md-4">
                <ul className="list-group list-group-flush">
                <li className="list-group-item"><h3>TopRated Samples</h3></li>
                <li className="list-group-item">Essay samples</li>
                <li className="list-group-item">Research paper samples</li>
                <li className="list-group-item">Book review samples</li>
                <li className="list-group-item">Essay Writing</li>
                <li className="list-group-item">Academic Writing</li>
                </ul>
                <Calculator/>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Blog;
