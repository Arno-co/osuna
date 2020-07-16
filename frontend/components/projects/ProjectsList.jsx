import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsList  = (props) => {
    const {projects} = props;

    const handleProjectColor = (title) => {
        const initial = title.slice(0, 1).toUpperCase();

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

    return (
        <div>{
            projects.map((project) => {
                return (
                    <Link to={`/projects/${project.id}`} key={project.id}>
                        <div className='mini-tile-container'>
                            <div className='mini-tile' style={{ background: handleProjectColor(project.title) }}></div>
                            <div className='mini-tile-container-text'>{project.title}</div>
                        </div>
                    </Link>
                )
            })
        }</div>
    )
}

export default ProjectsList;