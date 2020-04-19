import React from 'react';
import { Link } from 'react-router-dom';

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.project;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.props.clearErrors()
        console.log(this.props)
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
    
        const newProject = Object.assign({}, this.state);
        this.props.processForm(newProject).then(() => {
            this.props.closeModal();
            this.props.history.push('/home');
        },
            () => this.renderErrors()
        );
    }

    renderErrors() {
        if (this.props.errors) {
            return (
                <ul className='errors'>{
                    this.props.errors.map((error, i) => (
                        <li className='error' key={`error=${i}`}>{error}</li>
                    ))
                }</ul>
            )
        }
    }

    render() {
        if (this.props.project) {
            return (
                <div>
                    <form className='project-form' onSubmit={this.handleSubmit}>
                        <h2 className='project-form-title'>{this.props.formType}</h2>
                        <label className='project-label'>Title</label>
                        <input className='project-field-title' type="text" placeholder="your project title" value={this.state.title} onChange={this.update('title')} />
                        <label className='project-label'>Description</label>
                        <input className='project-field-description' type="textarea" placeholder="Add a description" value={this.state.description} onChange={this.update('description')} />
                        <div className='dates'>
                            <label className='project-label'>Starts</label>
                            <input className='project-field' type="date" placeholder="your project starting date" value={this.state.start_date} onChange={this.update('start_date')} />
                            <label className='project-label'>Ends</label>
                            <input className='project-field' type="date" placeholder="your project ending date" value={this.state.end_date} onChange={this.update('end_date')} />
                        </div>
                        <input className='nav-button' type='submit' value={this.props.formType === 'CREATE A PROJECT' ? 'CREATE' : 'EDIT'} />
                        {this.renderErrors()}
                    </form>
                </div>
            )
        } else {
            return null;
        }
    }

}

export default ProjectForm;