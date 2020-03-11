import React from 'react';
import { signup, login, logout } from '../actions/session_actions';
import { Link } from 'react-router-dom';

const Greeting = (props) => {

    if (props.currentUser) {

               
            return (
        <header className='nav'>
                <img className="logo-header" src={window.logoURL} />
                <div className="user-greeting-container">
                    <div className="user-greeting" >Hi {props.currentUser.username}!
                    <br />
                    </div>
                    <button className="nav-button" onClick={() => (props.logout())}>LOG OUT</button>
                </div>
        </header>
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
            
            <header className='nav'>
                <img className="logo-header" src={window.logoURL} />
                <nav className="login-signup">
                    <button className='nav-button' onClick={() => props.openModal('login')}>LOG IN</button>

                    <button className='nav-button' onClick={() => props.openModal('signup')}>SIGN UP</button>
                </nav>
            </header>
        )
    }
}

export default Greeting;