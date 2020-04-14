import React from 'react';
import { Link } from 'react-router-dom';

class ProjectTile extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() {
        return(
            <Link to={`/projects/${this.props.project.id}`} key={this.props.idx} className="home-project-index-item">
                <div className='tile-container'>
                    <div className='tile'>
                        <span className='icon-container'>
                            <i className="fas fa-list fa-3x" ></i>
                        </span>
                        <div className='project-leader'></div>
                    </div>
                    <div className='home-project-element'>
                        {this.props.project.title}
                    </div>
                </div>
            </Link>
        )
    }
}

export default ProjectTile;