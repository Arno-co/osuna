import React from 'react';
import GreetingContainer from './GreetingContainer';
import LoginFormContainer from './LoginFormContainer';
import SignupFormContainer from './SignupFormContainer'; 
import Modal from './modal';
import SplashPage from './Splash';
import { AuthRoute } from '../util/route_util'
import { Route, Switch } from 'react-router-dom';

const App = () => (
    <div className='main'>
        <Modal />
        <header className='nav'>
            <img className="logo-header" src={window.logoURL} />
           
            <GreetingContainer />
            
        </header>
            <Route exact path="/" component={SplashPage} />
            {/* <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        
        {/* <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} /> */}
    </div>
);


export default App;