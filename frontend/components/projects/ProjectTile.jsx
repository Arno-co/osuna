import React from 'react';
import { Link } from 'react-router-dom';
import ProjectMenu from './ProjectMenu';

class ProjectTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
        this.handleProjectMenu = this.handleProjectMenu.bind(this);
        
    }

    componentDidMount() {
        this.props.fetchUsers()
        this.props.fetchTeams()
        this.props.fetchProjects()
    }

    handleProjectMenu(e) {


        e.preventDefault()
        
        this.setState((state) => {
            return { showMenu: !state.showMenu };
        })
        
        
    };

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
        if (this.props.project) {
           
            return (
                <Link to={`/projects/${this.props.project.id}`} className="home-project-index-item">
                    <div className='tile-container'>
                        <div className='tile' style={{ background: this.handleColor(this.props.project.title) }}>
                            <div className='tile-top-container'>
                                <span className='star-icon-container'>
                                    <i className="fas fa-star fa-xs" ></i>
                                </span>
                                <span className='etc-icon-container' onClick={this.handleProjectMenu}>
                                    <i className="fas fa-ellipsis-h fa-xs" ></i>
                                </span>
                                {this.state.showMenu === true ? <ProjectMenu handleProjectMenu={this.handleProjectMenu} project={this.props.project} openModal={this.props.openModal} /> : null}
                            </div>
                            <span className='icon-container'>
                                <i className="fas fa-list fa-2x" ></i>
                            </span>
                            <div className='project-leader'>{
                                this.props.users[this.props.project.projectOwnerId] ? this.handleName(this.props.users[this.props.project.projectOwnerId].username) : null
                                
                            }</div>
                        </div>
                        <div className='home-project-element'>
                            {this.props.project.title}
                        </div>
                    </div>
                </Link>
            )
        } else {
            return null;
        }
    }
}

export default ProjectTile;