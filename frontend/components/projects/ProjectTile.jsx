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

    handleColor(title) {
        const initial = title.slice(0,1).toUpperCase();

        if (['A', 'B', 'C', 'D', 'E'].includes(initial)) {
            return '#e8384f'
        } else if (['G', 'H', 'I', 'J', 'K', 'L'].includes(initial)) {
            return '#eec300'
        } else if (['M', 'N', 'O', 'P', 'Q'].includes(initial)) {
            return '#4186e0'
        } else if (['R', 'S', 'T', 'U'].includes(initial)) {
            return '#ea4e9d'
        } else if (['V', 'W', 'X', 'Y', 'Z'].includes(initial)) {
            return '#7a6ff0'
        } else {
            return '#aa62e3'
        }
    }

    render() {
        return(
            <Link to={`/projects/${this.props.project.id}`} className="home-project-index-item">
                <div className='tile-container'>
                    <div className='tile' style={{ background: this.handleColor(this.props.project.title) }}>
                        <div className='tile-top-container'>
                            <span className='top-icon-container'>
                                <i className="fas fa-star fa-xs" ></i>
                            </span>
                            <span className='top-icon-container'>
                                <i className="fas fa-ellipsis-h fa-xs" ></i>
                            </span>
                        </div>
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