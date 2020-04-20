import React from 'react';

class DeleteProjectForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        this.props.processForm(this.props.project.id).then(() => {
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
            return(
                <div className='project-delete-form-container'>
                    <form onSubmit={this.handleSubmit} className='project-delete-form'>
                        <h2>Delete "{this.props.project.title}"" project?</h2>
                        <input className='nav-button' type='submit' value='DELETE' />
                        {this.renderErrors()}
                    </form>
    
                </div>
            )
        } else {
            return null;
        }
    }
}

export default DeleteProjectForm;