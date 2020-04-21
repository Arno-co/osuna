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
                        <div className='project-delete-form-title'>
                            <h2>Delete "{this.props.project.title}"" project?</h2>
                            <span className='close-icon-container' onClick={this.props.closeModal}>
                                <i className="fas fa-times fa-s" ></i>
                            </span>
                        </div>
                        <div className='project-delete-form-body'>
                            <p>Deleting this project will delete all the project data and associated tasks.</p>
                            <div className='project-delete-form-buttons'>
                                <button className='nav-button' id='cancel-delete' onClick={this.props.closeModal}>CANCEL</button>
                                <input className='nav-button' type='submit' value='DELETE' />
                            </div>
                        </div>
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