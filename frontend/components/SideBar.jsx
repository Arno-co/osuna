import React from 'react';
import { signup, login, logout } from '../actions/session_actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Team from './teams/Team';
import ProjectsList from './projects/ProjectsList';
import TasksList from './tasks/TasksList';
import { render } from 'react-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projectsOpen: "down",
            teamOpen: "down",
            tasksOpen: "down"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(field) {
        let direction = this.state[field];
        let newDirection = direction === "up" ? "down" : "up";
        this.setState({ [field]: newDirection })
    }

    render() {
        if (this.props.currentUser) {

            return (
                <aside className="side-bar">
                    <div className="top-aside">
                        <img className="logo-aside" src={window.logo_darkURL} />
                        <div className="user-greeting" >Hi {this.props.currentUser.username}!

                    <br />
                        </div>
                        <button className="button-aside" onClick={() => {
                            this.props.logout();
                            this.props.history.push('/')
                        }}>LOG OUT</button>
                        <Link to={`/home`}>
                            <i className="fas fa-home fa-1x"></i>
                        </Link>
                        <span className='shortcut-aside-label' onClick={() => this.handleClick('teamOpen')}>
                            <div>Team</div>
                            <i className={`fas fa-angle-${this.state.teamOpen}`}></i>
                        </span>
                       
                        <div className='shortcut-aside-field'>
                            {this.state.teamOpen === "down" ?
                                <Team users={this.props.users} teams={this.props.teams} />
                                :
                                null
                            }
                        </div>
                        <span className='shortcut-aside-label' onClick={() => this.handleClick('projectsOpen')}>
                            <div>Projects</div>
                            <i className={`fas fa-angle-${this.state.projectsOpen}`}></i>
                        </span>
                        <div className='shortcut-aside-field'>
                            {this.state.projectsOpen === "down" ?
                                <ProjectsList projects={this.props.projects} />
                                :
                                null
                            }
                        </div>
                        <span className='shortcut-aside-label' onClick={() => this.handleClick('tasksOpen')}>
                            <div>Tasks</div>
                            <i className={`fas fa-angle-${this.state.tasksOpen}`}></i>
                        </span>
                        <div className='shortcut-aside-field'>
                            {this.state.tasksOpen === "down" ?
                                <TasksList tasks={this.props.tasks} currentUser={this.props.currentUser}/>
                                :
                                null
                            }
                        </div>
                    </div>
                    <div className="bottom-aside">
                        <a className='icon-arnoco-gh' target="_blank" rel="noopener noreferrer" href="https://github.com/Arno-co">
                            <i className="fab fa-github-square fa-3x"></i>
                        </a>
                        <a className='icon-arnoco-li' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/arnaud-cognard-127556a/">
                            <i className="fab fa-linkedin fa-3x"></i>
                        </a>
                        {/* <a className='icon-arnoco-al' target="_blank" rel="noopener noreferrer" href="https://angel.co/u/arnaud-cognard">
                            <i className="fab fa-angellist fa-3x"></i>
                        </a> */}
                        <a className='icon-arnoco-we' target="_blank" rel="noopener noreferrer" href="https://arnaudcognard.com/">
                        <i className="fas fa-briefcase fa-3x"></i>
                        </a>    
                    </div>
                </aside>

            )
        } else {
            return (
                <nav className="login-signup">
                    <button className='button-aside' onClick={() => this.props.openModal('login')}>LOG IN</button>

                    <button className='button-aside' onClick={() => this.props.openModal('signup')}>SIGN UP</button>
                </nav>
            )
        }
    }
}

export default withRouter(SideBar);