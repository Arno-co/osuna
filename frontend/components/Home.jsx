import React from 'react';
import { connect } from 'react-redux';
import SideBarContainer from './SideBarContainer';
import ProjectForm from './projects/ProjectForm';
import { fetchTeams } from '../actions/team_actions'


class Home extends React.Component {

    constructor(props) {
        super(props);
    }
    
    // componentDidMount() {
        //     this.props.fetchTeams()
        // }
        
        
        render() {
            console.log(this.props);
        return (
            <div id='home'>
                <SideBarContainer team={this.props.team} />
                <div className="main-home">
                    <div className='nav-home'></div>
                    {/* <ProjectForm team={this.props.team} /> */}
                </div>
            </div>

)
    }

}



export default Home;