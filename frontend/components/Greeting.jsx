import React from 'react';
import { signup, login, logout } from '../actions/session_actions';
import { Link } from 'react-router-dom';

const Greeting = (props) => {

    if (props.currentUser) {

        return (
            <div>Hi {props.currentUser.username}!
        <br />
                <button onClick={() => (props.logout())}>LOG OUT</button>
            </div>
        )
    } else {
        return (
            // <div>Not signed in!
            //     <br />
            //     <Link to='/signup'>SIGN UP</Link>
            //     <br />
            //     <Link to='/login'>LOG IN</Link>
            //     <br />
            // </div>
            <nav className="login-signup">
                <button className='nav-button' onClick={() => props.openModal('login')}>LOG IN</button>
            
                <button className='nav-button' onClick={() => props.openModal('signup')}>SIGN UP</button>
            </nav>
        )
    }
}

export default Greeting;