import React from 'react';
import { signup, login, logout } from '../actions/session_actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Team from './teams/Team';
import { render } from 'react-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props)
    }

    
    handleColor(title) {
        const initial = title.slice(0, 1).toUpperCase();

        if (['A', 'B', 'C', 'D', 'E'].includes(initial)) {
            return '#e8384f'
        } else if (['G', 'H', 'I', 'J', 'K', 'L'].includes(initial)) {
            return '#eec300'
        } else if (['M', 'N', 'O', 'P', 'Q'].includes(initial)) {
            return '#4186e0'
        } else if (['R', 'S', 'T', 'U'].includes(initial)) {
            return '#ea4e9d'
        } else if (['V', 'W', 'X', 'Y', 'Z'].includes(initial)) {
            return '#7a6ff0'
        } else {
            return '#aa62e3'
        }
    }


    render() {
        if (this.props.currentUser) {

            return (
                <aside className="side-bar">
                    <div className="top-aside">
                        <img className="logo-aside" src={window.logo_darkURL} />
                        <div className="" >Hi {this.props.currentUser.username}!

                    <br />
                        </div>
                        {/* <div>{props.team.name}</div> */}
                        <button className="button-aside" onClick={() => {
                            this.props.logout();
                            this.props.history.push('/')
                        }}>LOG OUT</button>
                        <Link to={`/home`}>
                            <i className="fas fa-home fa-1x"></i>
                        </Link>
                        <div className='shortcut-aside-label'>Team</div>
                        <Team users={this.props.users} teams={this.props.teams} />
                        <div className='shortcut-aside-field'></div>
                        <div className='shortcut-aside-label'>Projects</div>
                        <div className='shortcut-aside-field'>
                            <div>{
                                this.props.projects.map((project) => {
                                    return (
                                        <Link to={`/projects/${project.id}`} key={project.id}>
                                            <div className='mini-tile-container'>
                                                <div className='mini-tile' style={{ background: this.handleColor(project.title) }}></div>
                                                <div>{project.title}</div>
                                            </div>
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
                    <button className='button-aside' onClick={() => this.props.openModal('login')}>LOG IN</button>

                    <button className='button-aside' onClick={() => this.props.openModal('signup')}>SIGN UP</button>
                </nav>
            )
        }
    }
}

export default withRouter(SideBar);