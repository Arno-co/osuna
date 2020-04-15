import React from 'react';
import { Link } from 'react-router-dom';

class ProjectTile extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    handleName(name) {
        let nameArray = name.split(' ');
        if (nameArray.length === 1) {
            return name.slice(0, 1).toUpperCase()
        } else {
            return nameArray[0].slice(0, 1).toUpperCase().concat(nameArray[nameArray.length - 1].slice(0, 1).toUpperCase())
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
                        <div className='project-leader'>{
                        this.handleName(this.props.users[this.props.project.projectOwnerId].username)
                        }</div>
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