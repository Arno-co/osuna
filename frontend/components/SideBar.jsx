import React from 'react';
import { signup, login, logout } from '../actions/session_actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Team from './teams/Team';
import ProjectsList from './projects/ProjectsList';
import { render } from 'react-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projectsOpen: "down",
            teamOpen: "down",
            tasksOpen: "down"
        }
        this.handleClickTeam = this.handleClickTeam.bind(this);
        this.handleClickProjects = this.handleClickProjects.bind(this);
    }

    
    handleProjectColor(title) {
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

    handleDueDate(date) {
        let today = Date.now()
        let parsedDate = Date.parse(date)

        if (parsedDate < today) {
            return 'red'
        } else {
            return 'white'
        }
    }

    handleTaskColor(task) {
        let today = Date.now()
        let parsedDate = Date.parse(task.endDate)
        if (task.completed) {
            return '#25e8c8'
        } else if (parsedDate < today) {
           return 'red'
        } else {
            return "white"
        }
    }

    handleClickTeam() {
        let direction = this.state.teamOpen;
        let newDirection = direction === "up" ? "down" : "up";

        this.setState({teamOpen: newDirection})
    }

    handleClickProjects() {
        console.log(this.state)
        let direction = this.state.projectsOpen;
        let newDirection = direction === "up" ? "down" : "up";

        this.setState({ projectsOpen: newDirection })
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
                        <span className='shortcut-aside-label' onClick={this.handleClickTeam}>
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
                        <span className='shortcut-aside-label' onClick={this.handleClickProjects}>
                            <div>Projects</div>
                            <i className={`fas fa-angle-${this.state.projectsOpen}`}></i>
                        </span>
                        <div className='shortcut-aside-field'>
                            {this.state.projectsOpen === "down" ?
                                <ProjectsList projects={this.props.projects} />
                                :
                                null
                            }
                            
                            {/* <div>{
                                this.props.projects.map((project) => {
                                    return (
                                        <Link to={`/projects/${project.id}`} key={project.id}>
                                            <div className='mini-tile-container'>
                                                <div className='mini-tile' style={{ background: this.handleProjectColor(project.title) }}></div>
                                                <div className='mini-tile-container-text'>{project.title}</div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }</div> */}
                        </div>
                        <div className='shortcut-aside-label'>Tasks</div>
                        <div className='shortcut-aside-field'>
                        <div>{
                                this.props.tasks.map((task) => {
                                    if (task.assigneeId === this.props.currentUser.id) {
                                        return (
                                            <Link to={`/projects/${task.projectId}/${task.id}`} key={task.id}>
                                                <div className='mini-tile-container'>
                                                    <div className='mini-tile' style={{ background: this.handleTaskColor(task) }}></div>
                                                    <div className='mini-tile-container-text'>{task.title}</div>
                                                </div>
                                            </Link>
                                        )
                                    }
                                })
                            }</div>
                        </div>
                    </div>
                    <div className="bottom-aside">
                        <a className='icon-arnoco-gh' target="_blank" href="https://github.com/Arno-co">
                            <i className="fab fa-github-square fa-3x"></i>
                        </a>
                        <a className='icon-arnoco-li' target="_blank" href="https://www.linkedin.com/in/arnaud-cognard-127556a/">
                            <i className="fab fa-linkedin fa-3x"></i>
                        </a>
                        {/* <a className='icon-arnoco-al' target="_blank" href="https://angel.co/u/arnaud-cognard">
                            <i className="fab fa-angellist fa-3x"></i>
                        </a> */}
                        <a className='icon-arnoco-we' target="_blank" href="https://arnaudcognard.com/">
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