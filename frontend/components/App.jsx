import React from 'react';
import GreetingContainer from './GreetingContainer';
import LoginFormContainer from './LoginFormContainer';
import SignupFormContainer from './SignupFormContainer'; 
import Modal from './modal';
import HomeContainer from './HomeContainer';
import Splash from './Splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Route, Switch, Redirect } from 'react-router-dom';
import TeamForm from './teams/TeamForm';
import ProjectContainer from './projects/ProjectContainer';

const App = (props) => {

    // const greetingContainerDiv = (props.loggedIn) ? (
    //     null
    // ) : (
    //     <GreetingContainer />
    // )
    
            
    
    return (
        <div className='main'>
            <Modal />
            <AuthRoute exact path="/" component={Splash} />
            <ProtectedRoute exact path="/home" component={HomeContainer} />
            {/* <AuthRoute exact path="/projects/:projectId" component={ProjectContainer} /> */}
            <ProtectedRoute exact path="/projects/:projectId/:taskId?" component={ProjectContainer} />
        </div>
    )
}




export default App; 