import React from 'react';
import { Link } from 'react-router-dom';

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.project;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.props.clearErrors()
        console.log(this.props)
        console.log(this.state)
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
                    <form className='project-form' id='project' onSubmit={this.handleSubmit}>
                        <h2 className='project-form-title'>{this.props.formType}</h2>
                        <label className='project-label'>Title</label>
                        <input className='project-field-title' type="text" value={this.state.title} onChange={this.update('title')} required/>
                        <label className='project-label'>Description</label>
                        <textarea className='project-field-description'  value={this.state.description} onChange={this.update('description')} form='project' rows="5" cols="33" required></textarea>
                        <div className='dates'>
                            <label className='project-label'>Starts</label>
                            <input className='project-field' type="date" value={this.state.startDate} onChange={this.update('startDate')} />
                            <label className='project-label'>Ends</label>
                            <input className='project-field' type="date" value={this.state.endDate} onChange={this.update('endDate')} required/>
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