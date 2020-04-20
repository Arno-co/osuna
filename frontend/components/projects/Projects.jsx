import React from 'react';
import ProjectTile from './ProjectTile';
import { openModal } from '../../actions/modal_actions';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        debugger;
    }

    componentDidUpdate() {
        this.props.fetchProjects();
    }

    render() {
        console.log(this.props)
        if (!this.props.projects.length) {
            return null;
        } else {
            return (
                <div className='home-projects-index'>
                    <h2>Projects</h2>
                            {
                                this.props.projects.map((project) => {
                                    // if (project.id === this.props.projects[this.props.projects.length - 1].id && !this.props.projects[this.props.projects.length - 1]) {
                                    //     return null;
                                    // } else {
                                    // return (
                                    //     <div className='home-project-container' key={idx}>
                                    //         <ProjectTile project={project} users={this.props.users} openModal={this.props.openModal}/>
                                    //     </div>
                                    // )
                                    // }
                                    return (
                                        <div className='home-project-container' key={project.id}>
                                            <ProjectTile project={project} users={this.props.users} openModal={this.props.openModal} />
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

export default Projects