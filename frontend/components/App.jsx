import React from 'react';
import GreetingContainer from './GreetingContainer';
import LoginFormContainer from './LoginFormContainer';
import SignupFormContainer from './SignupFormContainer'; 
import Modal from './modal';
import Home from './Home';
import SplashPage from './Splash';
import { AuthRoute } from '../util/route_util'
import { Route, Switch } from 'react-router-dom';
import TeamForm from './teams/TeamForm';

const App = () => (
    <div className='main'>
        <Modal />
        <header className='nav'>
            <img className="logo-header" src={window.logoURL} />
           
            <GreetingContainer />
            
        </header>
            <Route exact path="/" component={SplashPage} />
            {/* <TeamForm /> */}
            <AuthRoute path="/home" component={Home} />
            {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        
        {/* <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} /> */}
    </div>
);


export default App; 