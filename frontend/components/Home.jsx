import React from 'react';
import { connect } from 'react-redux';
import SideBarContainer from './SideBarContainer';
import ProjectForm from './projects/ProjectForm';
import { fetchTeams, fetchTeam } from '../actions/team_actions';


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
            console.log(this.props);
        return (
            <div id='home'>
                <SideBarContainer />
                <div className="main-home">
                    <div className='nav-home'></div>
                    {/* <ProjectForm team={this.props.team} /> */}
                    {/* <Projects /> */}
                </div>
            </div>

)
    }

}



export default Home;