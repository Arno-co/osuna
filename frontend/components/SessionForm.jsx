import React from 'react';
import { Link } from 'react-router-dom';



class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.linkModal = this.linkModal.bind(this);
        this.props.clearErrors();
        this.fillDemo = this.fillDemo.bind(this);
    }

    update(field) {
        return e => {this.setState({ [field]: e.currentTarget.value })}
    }

    addUsername() {
        if (this.props.formType === 'SIGN UP') {
            return (<>
                <label className='login-signup-label'>Username
                <br/>
                </label>
                <input className='login-signup-field' placeholder="    username" type="text" value={this.state.username} onChange={this.update('username')} />
            </>)
        } 
        else {
            return ''
        }
    }
    
    addLink() {
        if (this.props.formType === 'LOG IN') {

            return (
                <>
                    <div className='instead'>
                        <br />
                        <p className='link-form-label'>Not a registered user?</p>
                        <Link className='link-form' onClick={this.linkModal} to="/signup">Sign up</Link>
                        
                    </div>
                </>
            )
        } else {
            return (
            <>
            <div className='instead'>
                    <br />
                        <p className='link-form-label'>Already have an account?</p>
                        <Link className='link-form' onClick={this.linkModal} to="/login">Log in</Link>
            </div>
            </>
            )
        }
    }

    linkModal() {
        if (this.props.formType === 'LOG IN') {
            this.props.clearErrors();
            this.props.openModal('signup')
        } else {
            this.props.clearErrors();
            this.props.openModal('login')
        }
    }
    
    renderErrors() {
        return(
        <ul classname='errors'>{
            this.props.errors.map((error, i) => (
            <li className='error' key={`error=${i}`}>{error}</li>
            ))
            }</ul>
        )
    }

    fillDemo(e) {
        e.preventDefault();
        this.props.loginForm({ email: 'mca@beastieboys.com', password: 'password' })
            .then(() => (this.props.closeModal()))
    }

    addDemo() {
      
            return(
                <input className='login-signup-button' onClick={this.fillDemo} value='DEMO LOGIN' />        
            )

    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.closeModal(), () => this.renderErrors())
    }

    // componentDidUpdate() {
    //     { this.addLink() } 
    // }


    render() {
        return(
            <form className='login-signup-form' onSubmit={this.handleSubmit}>
                <h1 className='form-title'>{this.props.formType}</h1>
                <br/>
                <br/>
                {this.addUsername()}
                <br/>
                <label className='login-signup-label'>Email
                <br />
                </label>
                <input className='login-signup-field' type="text" placeholder="    name@company.com" value={this.state.email} onChange={this.update('email')} />
                <br/>
                <label className='login-signup-label'>Password
                <br/>
                </label>
                <input className='login-signup-field' type="password" placeholder="    password" value={this.state.password} onChange={this.update('password')}/>
                <br/>
                {this.renderErrors()}
                <input className='login-signup-button' type="submit" value={this.props.formType} />
                {this.addDemo()}
                {this.addLink()}
            </form>
        )
    }
}

export default SessionForm;