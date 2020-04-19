import React from 'react';
import { withRouter } from 'react-router-dom';

class ProjectMenu extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props)

        this.handleEditClick = this.handleEditClick.bind(this);
    }

    handleEditClick(e) {
        e.preventDefault();

        this.props.openModal('editProject', this.props.project.id);
        console.log(this.props)
    } 

    render() {
        return (
            <div className='project-menu-container'>
                <div className='project-menu-item' onClick={this.handleEditClick}>Edit project</div>
                <div className='project-menu-item'>Delete project</div>
                <div className='project-menu-item'>Go to project</div>
            </div>
        )
    }
}

export default withRouter(ProjectMenu);