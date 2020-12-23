import React from 'react'
import visa from '../../assets/visa.png';
import paypal from '../../assets/paypal.png';
import mcafee from '../../assets/mcafee.png';
import mcard from '../../assets/mcard.png';

const OrderFooter = () => {
    return ( 
       <div className="order-footer fixed-bottom">
           <div className="container">
               <div className="row">
                    <div className="col-sm-6">
                        <br/>
                    <p>Top Rated Professors © 2020 All Rights Reserved | Terms and Conditions</p>
                    </div>
                    <div className="col-sm-6">
                        <br/>
                    <center>
                    <ul className="order-payments-methods">
                        <li><img src={mcafee} alt="mcafee" width="70px"/></li>
                        <li><img src={paypal} alt="paypal" width="70px"/></li>
                        <li><img src={visa} alt="visa" width="70px"/></li>
                        <li><img src={mcard} alt="mastercard" width="70px"/></li>
                    </ul>
                    </center>
                    </div>
               </div>
           </div>
       </div>
     );
};
 
export default OrderFooter;