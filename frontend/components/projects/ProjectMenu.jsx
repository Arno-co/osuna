import React from 'react';

class ProjectMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='project-menu-container'>
                <div className='project-menu-item'>Edit project</div>
                <div className='project-menu-item'>Delete project</div>
                <div className='project-menu-item'>Got to the project page</div>
            </div>
        )
    }
}

export default ProjectMenu;