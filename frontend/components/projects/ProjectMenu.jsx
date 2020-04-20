import React from 'react';
import { withRouter } from 'react-router-dom';

class ProjectMenu extends React.Component {
    constructor(props) {
        super(props)
   

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleEditClick(e) {
        e.preventDefault();
        this.props.handleProjectMenu(e)
        this.props.openModal('editProject', this.props.project.id);
    } 

    handleDeleteClick(e) {
        e.preventDefault();
        this.props.handleProjectMenu(e)
        this.props.openModal('deleteProject', this.props.project.id);
    } 

    render() {
        return (
            <div className='project-menu-container'>
                <div className='project-menu-item' onClick={this.handleEditClick}>Edit project</div>
                <div className='project-menu-item' onClick={this.handleDeleteClick}>Delete project</div>
                <div className='project-menu-item'>Go to project</div>
            </div>
        )
    }
}

export default withRouter(ProjectMenu);