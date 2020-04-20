import React from 'react';
import { connect } from 'react-redux';
import SideBarContainer from './SideBarContainer';
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
        }
        
        
        render() {
            // console.log(this.props);
        return (
            <div id='home'>
                <SideBarContainer />
                <div className="main-home">
                    <div className='nav-home'>
                        <h2>Home</h2>
                    </div>
                    <div className='body-home'>
                        {/* <ProjectForm team={this.props.team} /> */}
                        <Projects
                            users={this.props.users}
                            projects={this.props.projects}
                            teams={this.props.teams}
                            openModal={this.props.openModal}
                            fetchProjects={this.props.fetchProjects}
                        />
                    </div>
                </div>
            </div>

)
    }

}



export default Home;