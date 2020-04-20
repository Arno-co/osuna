import React from 'react';
import ProjectTile from './ProjectTile';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps)

        if (prevProps.modal.type !== this.props.modal.type) {

            this.props.fetchProjects();
        }
    }

    render() {
        // console.log(this.props)
        if (!this.props.projects.length) {
            return null;
        } else {
            return (
                <div className='home-projects-index'>
                    <h2>Projects</h2>
                            {
                                this.props.projects.map((project) => {
            
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
                            }

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
            )
        }
    }


}

export default withRouter(Projects)