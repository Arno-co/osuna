import React from 'react';
import { connect } from 'react-redux';
import SideBarContainer from './SideBarContainer';
import HomeSearch from './HomeSearch';
import ProjectForm from './projects/ProjectForm';
import { fetchTeams, fetchTeam } from '../actions/team_actions';
import Projects from './projects/Projects';


class Home extends React.Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
            this.props.fetchUsers()
            this.props.fetchTeams()
            this.props.fetchProjects()
            this.props.fetchTasks()
        }
        
        
        render() {
           
        return (
            <div id='home'>
                <SideBarContainer />
                <div className="main-home">
                    <div className='nav-home'>
                        <h2>Home</h2>
                        <HomeSearch projects={this.props.projects}  tasks={this.props.tasks}/>
                    </div>
                    <div className='body-home'>
                        {/* <ProjectForm team={this.props.team} /> */}
                        <Projects
                            users={this.props.users}
                            projects={this.props.projects}
                            teams={this.props.teams}
                            openModal={this.props.openModal}
                            fetchProjects={this.props.fetchProjects}
                            fetchUsers={this.props.fetchUsers}
                            fetchTeams={this.props.fetchTeams} 
                            fetchTasks={this.props.fetchTasks}
                            modal={this.props.modal}
                        />
                    </div>
                </div>
            </div>

)
    }

}



export default Home;