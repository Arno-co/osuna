import React from 'react';

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        if (!this.props.projects.length) {
            return null;
        } else {
            return (
                <div className='home-projects-index'>
                    <div className='home-project-container'>{
                        this.props.projects.map((project, idx) => {
                            return (
                                <div key={idx} className='home-project-element'>
                                    {project.title}
                                </div>
                            )
                        })
                    }</div>
                    <div className='home-new-project-container'>New Project</div>
                </div>
            )
        }
    }


}

export default Projects