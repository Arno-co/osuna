import React from 'react';
import SideBarContainer from '../SideBarContainer';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {}
        }

        console.log(this.props)
    }

    componentDidMount() {
        const projectIdNumber = this.props.match.params.projectId;

        this.props.fetchUsers();
        this.props.fetchTeams();
        this.props.fetchProjects().then(() => (this.setState({ project: this.props.projects[projectIdNumber] })))
        // this.props.fetchProject(projectIdNumber).then(() => { return this.setState({ project })} )
        
        
    }
    render() {
        // console.log(this.props)
        return(
            <div className='project-page'>
                    <SideBarContainer />
                <div className='project-main'>
                PROJECT GOES HERE
                {this.state.project.title}
                {this.state.project.description}
                {this.state.project.projectOwnerId ? this.props.users[this.state.project.projectOwnerId].username : null}
                </div>
            </div>
        )
    }


}

export default Project