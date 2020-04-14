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
                            {
                                this.props.projects.map((project, idx) => {
                                    return (
                                        <div className='home-project-container'>
                                            <div className='tile-container'>
                                                <div className='tile'>
                                                    <span className='icon-container'>
                                                        <i className="fas fa-list fa-3x" ></i>
                                                    </span>
                                                    <div className='project-leader'></div>
                                                </div>
                                                <div key={idx} className='home-project-element'>
                                                    {project.title}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                    <div className='home-project-container'>
                        <div className='tile-container'>
                            NEW PROJECT
                        </div>
                    </div>
                </div>
            )
        }
    }


}

export default Projects