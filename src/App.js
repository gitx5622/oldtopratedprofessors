import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Row, Col } from 'shards-react';
import About from './components/about';
import Home from './components/home';
import Blog from './components/blog';
import Contact from './components/contact';
import { history } from './utils/history';
import NotFound from './components/notFound';
import LoginForm from './auth/loginForm';
import Register from './auth/registerForm';
import SideBar from './order/sideBar';
import CreateOrder from './order/createOrder';
import Completed from './order/completed';
import Approved from './order/approved';
import AllOrders from './order/allOrders';
import InProgress from './order/inProgress';
import Pending from './order/pending';
import Revision from './order/revision';
import Rejected from './order/rejected';
import Cancelled from './order/cancelled';
import WaitingAssign from './order/waitingAssign';
import OrderBlog from './order/orderBlog';
import Ratings from './components/ratings';
import UploadFiles from './order/common/uploadInstructions';
import Deposit from './order/deposit';
import Withdraw from './order/withdraw';
import Transactions from './order/transactions';
import OrderFooter from './order/common/footer';
import Profile from './order/common/profile';
import Account from './order/common/account';
import Promocodes from './order/common/promocodes';
import Notifications from './order/notifications';
import OrderDetails from './order/orderDetails';
import PrivateRoute from './components/privateRoute';
import OrderNav from './order/common/orderNav';

const getStorageTheme = () => {
  let theme = '#68C798';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
}; 

const App = () =>  {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === '#68C798') {
      setTheme('#eaebef');
    }else {
      setTheme('#68C798');
    }
  };

  useEffect(() => {
    document.documentElement.style = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

    (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/5f6cbb5bf0e7167d001375c3/default';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();

  return (
      <div>
      <Router history={history}>
      <Switch>
        <Route path={["/order/index", "/order/createorder","/order/completed","/order/approved",
        "/order/inprogress","/order/pending","/order/revision","/order/rejected","/order/cancelled",
        "/order/waiting","/order/blog","/wallet/deposit","/wallet/withdraw","/wallet/transaction",
        "/order/profile","/order/account","/order/promocodes","/order/notifications", "/order/orderdetails"]}>
        <div style={{backgroundColor:theme}}>
        <div className="container-fluid">
          <Row>
            <Col sm={3}>
            <SideBar theme={theme} background={toggleTheme}/>
            </Col>
            <Col sm={9}><OrderNav/>
            <div className="pt-3 pb-20" style={{zIndex:1, marginTop:"40px"}}>
            <PrivateRoute path="/order/index" component={AllOrders}/>
            <PrivateRoute path="/order/createorder" component={CreateOrder}/>
            <Route path="/order/uploadfiles" component={UploadFiles}/>
            <Route path="/order/completed" component={Completed}/>
            <Route path="/order/approved" component={Approved}/>
            <Route path="/order/inprogress" component={InProgress}/>
            <Route path="/order/pending" component={Pending}/>
            <Route path="/order/revision" component={Revision}/>
            <Route path="/order/rejected" component={Rejected}/>
            <Route path="/order/cancelled" component={Cancelled}/>
            <Route path="/order/waiting" component={WaitingAssign}/>
            <Route path="/order/blog" component={OrderBlog}/>
            <Route path="/wallet/deposit" component={Deposit}/>
            <Route path="/wallet/withdraw" component={Withdraw}/>
            <Route path="/wallet/transaction" component={Transactions}/>
            <Route path="/order/profile" component={Profile}/>
            <Route path="/order/account" component={Account}/>
            <Route path="/order/promocodes" component={Promocodes}/>
            <Route path="/order/notifications" component={Notifications}/>
            <Route path="/order/orderdetails" component={OrderDetails}/>
            </div>
            </Col>
          </Row>
         </div> 
         <OrderFooter/> 
         </div> 
        </Route>
        <Route path={["/login","/register"]}>
              <Route path="/login" component={LoginForm}/>
              <Route path="/register" component={Register}/>
        </Route>
        <Route path={["/about","/blog","/contact","/notfound","/"]}>
            <Route path="/reviews" component={Ratings}/>
            <Route path="/about" component={About}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/notfound" component={NotFound} />
            <Route exact path="/" component={Home}/>
        </Route>
        </Switch>
      </Router>
      </div>
  );
};

export default App;
