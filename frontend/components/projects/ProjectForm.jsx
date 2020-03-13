import React from 'react';
import { Link } from 'react-router-dom';

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            description: '',
            start_end: '',
            end_date: '',
            teams: []
        };
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    handleSubmit(e) {
        const project = Object.assign({}, this.state);
        this.props.createProject(project);
    }

    render() {
        return (
            <div>
                <form className='project-form' onSubmit={this.handleSubmit}>
                    <h2 className='project-form-title'>CREATE YOUR PROJECT</h2>
                    <label className='project-label'>Title</label>
                    <input className='project-field-title' type="text" placeholder="    your project title" value={this.state.title} onChange={this.update('title')} />
                    <label className='project-label'>Description</label>
                    <input className='project-field-description' type="text" placeholder="    your project description" value={this.state.description} onChange={this.update('description')} />
                    <div className='dates'>
                        <label className='project-label'>Starts</label>
                        <input className='project-field' type="date" placeholder="    your project starting date" value={this.state.description} onChange={this.update('start_date')} />
                        <label className='project-label'>Ends</label>
                        <input className='project-field' type="date" placeholder="    your project ending date" value={this.state.description} onChange={this.update('end_date')} />
                    </div>
                    <button className='nav-button'>CREATE</button>
                </form>
            </div>
        )
    }

}

export default ProjectForm;