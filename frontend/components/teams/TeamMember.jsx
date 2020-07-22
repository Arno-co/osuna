import React from 'react';
import SideBarContainer from '../SideBarContainer';
import TaskItem from '../tasks/TaskItem';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Route } from 'react-router-dom';
import TaskFormContainer from '../tasks/TaskFormContainer';
import ProjectTile from '../projects/ProjectTile';
import HomeSearch from '../HomeSearch';

class TeamMember extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: this.props.match.params.userId
            },
            tasks: this.props.tasks
        }
        this.handleTeamColor = this.handleTeamColor.bind(this);
        this.handleProjects = this.handleProjects.bind(this);
        this.handleAuthoredTasksIndex = this.handleAuthoredTasksIndex.bind(this);
        this.handleAssignedTasksIndex = this.handleAssignedTasksIndex.bind(this);
        this.handleNewTask = this.handleNewTask.bind(this);
    }

    componentDidMount() {
        const userIdNumber = this.props.match.params.userId;
        console.log(userIdNumber, 'CDM')

        this.props.fetchProjects();
        this.props.fetchTeams();
        this.props.fetchTasks();
        this.props.fetchUsers().then(() => (this.setState({ user: this.props.users[userIdNumber] })))
    }

    componentDidUpdate(prevProps) {

        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            const userIdNumber = this.props.match.params.userId;
            console.log(userIdNumber)

            this.props.fetchProjects();
            this.props.fetchTeams();
            this.props.fetchTasks();
            this.props.fetchUsers().then(() => (this.setState({ user: this.props.users[userIdNumber] })))
        }

    }



    handleProjectColor(title) {

        if (title) {
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
        } else {
            return null;
        }
    }

    handleProjects() {
        let projects = [];

        if (this.props.projects) {
            projects = Object.values(this.props.projects).filter(project => project.projectOwnerId === this.state.user.id);

            return (
                projects.map((project) => {
                    return (
                        <div className='home-project-container' key={project.id}>
                            <ProjectTile
                                project={project}
                                users={this.props.users}
                                openModal={this.props.openModal}
                                fetchProjects={this.props.fetchProjects}
                                fetchUsers={this.props.fetchUsers}
                                fetchTeams={this.props.fetchTeams}
                            />
                        </div>
                    )
                })
            )
        } else {
            return null;
        }
    }


    handleAssignedTasksIndex() {
        let tasks = [];

        if (this.props.tasks) {

            tasks = this.props.tasks.filter(task => task.authorId === this.state.user.id)

            return (
                tasks.map((task) => {
                    return (
                        <TaskItem
                            task={task}
                            users={this.props.users}
                            project={this.props.projects[task.projectId]}
                            teams={this.props.teams}
                            createTask={this.props.createTask}
                            updateTask={this.props.updateTask}
                            history={this.props.history}
                            formatDate={this.formatDate}
                            key={task.id}
                        />
                    )
                })
            )
        } else {
            return null;
        }
    }

    handleAuthoredTasksIndex() {
        let tasks = [];

        if (this.props.tasks) {

            tasks = this.props.tasks.filter(task => task.assigneeId === this.state.user.id)

            return (
                tasks.map((task) => {
                    return (
                        <TaskItem
                            task={task}
                            users={this.props.users}
                            project={this.props.projects[task.projectId]}
                            teams={this.props.teams}
                            createTask={this.props.createTask}
                            updateTask={this.props.updateTask}
                            history={this.props.history}
                            formatDate={this.formatDate}
                            key={task.id}
                        />
                    )
                })
            )
        } else {
            return null;
        }
    }


    formatDate() {
        let result = "";
        const d = new Date();
        result += d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
        return result;
    }

    handleNewTask() {
        this.props.createTask({
            title: '',
            description: '',
            authorId: this.props.currentUser.id,
            projectId: this.state.project.id,
            assigneeId: this.props.currentUser.id,
            completed: false,
            startDate: this.formatDate(),
            endDate: this.formatDate()
        })
            .then(() => this.props.fetchTasks(), err => console.log(err))
    }

    handleTeamColor(title) {
        const initial = title.slice(0, 1).toUpperCase();

        if (['A', 'B', 'C', 'D', 'E'].includes(initial)) {
            return '#4186e0'
        } else if (['G', 'H', 'I', 'J', 'K', 'L'].includes(initial)) {
            return '#e8384f'
        } else if (['M', 'N', 'O', 'P', 'Q'].includes(initial)) {
            return '#3ad580'
        } else if (['R', 'S', 'T', 'U'].includes(initial)) {
            return '#4186e0'
        } else if (['V', 'W', 'X', 'Y', 'Z'].includes(initial)) {
            return '#e8384f'
        } else {
            return '#eec300'
        }
    }
    
    render() {

        if (this.state.user.username) {
            const user = this.state.user;
            return (
                <div className='team-member-page'>
                    <SideBarContainer />
                    <div className='team-member-main'>
                        <div className='team-member-header-container'>
                            <div className='team-member-title-container'>
                                <div className='team-member-mini-tile-container' style={{ background: this.handleTeamColor(user.username) }}>
                                    <span className='team-member-mini-tile'>
                                        <i className="fas fa-user-astronaut fa-4x" ></i>
                                    </span>
                                </div>
                                <div className='team-member-header-text'>
                                    <h1>{this.state.user.username}</h1>
                                    {/* <div className='project-owner'>{this.props.users[this.state.project.projectOwnerId] ? this.props.users[this.state.project.projectOwnerId].username : null}</div>
                                    <div className='project-description'>{this.state.project.description}</div> */}
                                </div>
                            </div>
                            <HomeSearch projects={Object.values(this.props.projects)} tasks={this.props.tasks} />
                        </div>
                        <div className='team-member-body-container'>
                            <div className='home-projects-index'>
                                <h2>Projects</h2>
                                {this.handleProjects()}
                                <div className='home-project-container'>
                                    <div className='tile-container' onClick={() => this.props.openModal('createProject')}>
                                        <div className='new-project-tile'>
                                            <span className='icon-container'>
                                                <i className="fas fa-plus-square fa-3x" ></i>
                                            </span>
                                        </div>
                                        <div className='home-project-element'>
                                            Add a project
                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tasks-index-container'>
                                {/* <div className='add-task-button-container'>
                                    <div className='add-task-button' onClick={() => { this.handleNewTask() }}>ADD TASK</div>

                                    <div className='back-projects-button'>
                                        <a href="#/home">BACK TO PROJECTS</a>
                                    </div>
                                </div> */}
                                <div className='tasks-table'>
                                    <div className='tasks-table-row-top'>
                                        <div className='task-table-cell-task'>Task</div>
                                        <div className='task-table-cell-assignee'>Assignee</div>
                                        <div className='task-table-cell-start-date'>Start Date</div>
                                        <div className='task-table-cell-end-date'>Due Date</div>
                                    </div>
                                    {this.handleAssignedTasksIndex()}
                                    <div className='tasks-table-row'></div>
                                </div>
                            </div>
                            <div className='tasks-index-container'>
                                {/* <div className='add-task-button-container'>
                                    <div className='add-task-button' onClick={() => { this.handleNewTask() }}>ADD TASK</div>

                                    <div className='back-projects-button'>
                                        <a href="#/home">BACK TO PROJECTS</a>
                                    </div>
                                </div> */}
                                <div className='tasks-table'>
                                    <div className='tasks-table-row-top'>
                                        <div className='task-table-cell-task'>Task</div>
                                        <div className='task-table-cell-assignee'>Assignee</div>
                                        <div className='task-table-cell-start-date'>Start Date</div>
                                        <div className='task-table-cell-end-date'>Due Date</div>
                                    </div>
                                    {this.handleAuthoredTasksIndex()}
                                    <div className='tasks-table-row'></div>
                                </div>
                            </div>
                        </div>
                            <ProtectedRoute exact path="/projects/:projectId/:taskId" component={TaskFormContainer} />
                    </div>

                </div>
            )
        } else {
            console.log('ELSE')
            return null;
        }
    }


}

export default TeamMember;
