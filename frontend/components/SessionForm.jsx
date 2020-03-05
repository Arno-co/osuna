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
    }

    update(field) {
        return e => {this.setState({ [field]: e.currentTarget.value })}
    }

    addUsername() {
        if (this.props.formType === 'SIGN UP') {
            return (<>
                <label className='login-signup-label'>Username:
                    <br/>
                    <input className='login-signup-field' placeholder="username" type="text" value={this.state.username} onChange={this.update('username')} />
                </label>
            </>)
        } 
        else {
            return ''
        }
    }
    
    // addLink() {
    //     if (this.props.formType === 'SIGN IN') {
    //         return (<>
    //             <br/>
    //             <Link to="/signup">SIGN UP INSTEAD</Link>
    //             </>)
    //     } else {
    //         return (<>
    //         <br/>
    //             <Link to="/login">SIGN IN INSTEAD</Link>
    //         </>)
    //     }
    // }
    
    renderErrors() {
        return(
        <ul>{
            this.props.errors.map((error, i) => (
            <li key={`error=${i}`}>{error}</li>
            ))
            }</ul>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.closeModal(), () => this.renderErrors())
    }


    render() {
        return(
            <form className='login-signup-form' onSubmit={this.handleSubmit}>
                <h1>{this.props.formType}</h1>
                <br/>
                <br/>
                {this.addUsername()}
                <br/>
                <label className='login-signup-label'>Email:
                    <br/>
                    <input className='login-signup-field' type="text" placeholder="name@company.com" value={this.state.email} onChange={this.update('email')}/>
                </label>
                <br/>
                <label className='login-signup-label'>Password:
                    <br/>
                    <input className='login-signup-field' type="password" placeholder="password" value={this.state.password} onChange={this.update('password')}/>
                </label>
                <br/>
                {this.renderErrors()}
                <input className='login-signup-button' type="submit" value={this.props.formType} />
                {/* {this.addLink()} */}
            </form>
        )
    }
}

export default SessionForm;