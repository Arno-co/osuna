import React from 'react';
import { signup, login, logout } from '../actions/session_actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const SideBar = (props) => {
    if (props.currentUser) {
        return (
        <aside className="side-bar">
            <div className="top-aside">
                    <img className="logo-aside" src={window.logo_darkURL} />
                    <div className="" >Hi {props.currentUser.username}!
                    
                    <br />
                    </div>
                    {/* <div>{props.team.name}</div> */}
                    <button className="button-aside" onClick={() => {
                        props.logout();
                        props.history.push('/')
                    }}>LOG OUT</button>
            </div>
            <div className="bottom-aside">
                    <i className="fab fa-github-square"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fas fa-briefcase"></i>
            </div>
        </aside>

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
                <button className='button-aside' onClick={() => props.openModal('login')}>LOG IN</button>

                <button className='button-aside' onClick={() => props.openModal('signup')}>SIGN UP</button>
            </nav>
        )
    }
}

export default withRouter(SideBar);