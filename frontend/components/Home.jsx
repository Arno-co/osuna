import React from 'react';
import { connect } from 'react-redux';
import SideBarContainer from './SideBarContainer';
import ProjectForm from './projects/ProjectFormContainer';
import ProjectFormContainer from './projects/ProjectFormContainer';


class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.props.fetchTeams()
    // }


    render() {
        return (
            <div>
                <SideBarContainer team={this.props.team} />
                <ProjectFormContainer team={this.props.team} />

            </div>

        )
    }

}



export default Home;