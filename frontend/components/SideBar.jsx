import React from 'react';
import { signup, login, logout } from '../actions/session_actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Team from './teams/Team';

const SideBar = (props) => {
    // console.log(props)
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
                    <Link to={`/home`}>
                        <i className="fas fa-home fa-1x"></i>
                    </Link>
                    <div className='shortcut-aside-label'>Team</div>
                    <Team users={props.users} teams={props.teams} />
                    <div className='shortcut-aside-field'></div>
                    <div className='shortcut-aside-label'>Projects</div>
                    <div className='shortcut-aside-field'>
                        <div>{
                            props.projects.map((project, idx) => {
                                return (
                                    <Link to={`/projects/${project.id}`} key={idx}>
                                        <div>{project.title}</div>
                                    </Link>
                                )
                            })
                        }</div>
                    </div>
                    <div className='shortcut-aside-label'>Tasks</div>
                    <div className='shortcut-aside-field'></div>
            </div>
            <div className="bottom-aside">
                    <a className='icon-arnoco-gh' href="https://github.com/Arno-co">
                        <i className="fab fa-github-square fa-3x"></i>
                    </a>
                    <a className='icon-arnoco-li' href="https://www.linkedin.com/in/arnaud-cognard-127556a/">
                        <i className="fab fa-linkedin fa-3x"></i>
                    </a>
                    <a className='icon-arnoco-al' href="https://angel.co/u/arnaud-cognard">
                        <i className="fab fa-angellist fa-3x"></i>
                    </a>    
                    {/* <a className='icon-arnoco-we' href="">
                        <i className="fas fa-briefcase fa-3x"></i>
                    </a>     */}
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