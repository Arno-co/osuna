import React from 'react';
import GreetingContainer from './GreetingContainer';
import LoginFormContainer from './LoginFormContainer';
import SignupFormContainer from './SignupFormContainer'; 
import Modal from './modal';
import HomeContainer from './HomeContainer';
import SplashPage from './Splash';
import { AuthRoute } from '../util/route_util'
import { Route, Switch } from 'react-router-dom';
import TeamForm from './teams/TeamForm';

const App = (props) => {

    // const greetingContainerDiv = (props.loggedIn) ? (
    //     null
    // ) : (
    //     <GreetingContainer />
    // )
    
    return (
        <div className='main'>
            <Modal />
                {/* <Route exact path="
                /" component={GreetingContainer} /> */}
            {/* <header className='nav'>
         
            </header> */}
            <Route exact path="/" component={SplashPage} />
            {/* <TeamForm /> */}
            <AuthRoute path="/home" component={HomeContainer} />
            {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        
        {/* <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} /> */}
    </div>
)
};


export default App; 