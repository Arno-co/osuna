import React from 'react';
import { Link } from 'react-router-dom';
import TeamForm from './teams/TeamForm';



class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        if (!localStorage.myUserData) {
            this.state = {
                username: "",
                email: "",
                password: "",
                team_id: ""
            }
            
        } else {
            let userData = JSON.parse(localStorage.getItem('myUserData'));
            userData.team_id = JSON.parse(localStorage.getItem('myTeamInfo')).id
            
            this.state = userData;
            // this.setState({ ['teamId']: JSON.parse(localStorage.getItem('myTeamInfo')).id }) 
            
            localStorage.setItem('myUserData', '');
            

            // return this.state;
            // localStorage.myUserData.clear();
    };
        // this.state = {
        //     username: "",
        //     email: "",
        //     password: "",
        //     teamId: ""
        // }
      
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.linkModal = this.linkModal.bind(this);
        this.props.clearErrors();
        this.fillDemo = this.fillDemo.bind(this);
        this.addTeam = this.addTeam.bind(this);
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
                        <p className='link-form-label'>Not a registered user?   </p>
                        <Link className='link-form' onClick={this.linkModal} to="/signup">Sign up</Link>
                        
                    </div>
                </>
            )
        } else {
            return (
            <>
            <div className='instead'>
                    <br />
                        <p className='link-form-label'>Already have an account?   </p>
                        <Link className='link-form' onClick={this.linkModal} to="/login">Log in</Link>
            </div>
            </>
            )
        }
    }
    
    linkModal() {
        if (this.props.formType === 'LOG IN') {
            this.props.clearErrors();
            this.props.openModal('signup');
            localStorage.setItem('myTeamInfo', '');
            localStorage.setItem('myUserData', '');
        } else {
            this.props.clearErrors();
            this.props.openModal('login');
            localStorage.setItem('myTeamInfo', '');
            localStorage.setItem('myUserData', '');
        }
    }
    
    addTeam() {
    
        if (this.props.formType === 'SIGN UP' && !localStorage.myTeamInfo) {
            return (<>
                    <label className='login-signup-label'>Team
                    <br />
                    </label>
                <div className='team-buttons-container'>
                    <button className="team-buttons" onClick={() => {
                        localStorage.setItem('myUserData', JSON.stringify(this.state));
                        this.props.openModal('createTeam')
                    }}>CREATE A TEAM</button>
                    <button className="team-buttons" onClick={() => {
                        localStorage.setItem('myUserData', JSON.stringify(this.state));
                        this.props.openModal('joinTeam')
                    }}>JOIN A TEAM</button>
                </div>
            </>)
        }
        else if (this.props.formType === 'SIGN UP' && localStorage.myTeamInfo){
            return(
                <div className='team-signup'>
                    <label className='login-signup-label'>Team
                    </label>
                    <input className='login-signup-field' type="text" placeholder={JSON.parse(localStorage.getItem('myTeamInfo')).name} />
                </div>
            )
        }
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

    fillDemo(e) {
        e.preventDefault();
        this.props.loginForm({ email: 'mca@beastieboys.com', password: 'password', team_id: 1 })
            .then(() => (this.props.closeModal())).then(() => this.props.history.push('/home'))
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
    
        // this.props.processForm(user).then(() => this.props.closeModal(), () => this.renderErrors());
        // this.navigateToHome();
        this.props.processForm(user).then(() => {
            this.props.closeModal(); 
            this.props.history.push('/home');
            localStorage.setItem('myTeamInfo', '');
            localStorage.setItem('myUserData', '');
        },
            () => this.renderErrors()
        );
    }


    render() {
        return(
            <form className='login-signup-form' onSubmit={this.handleSubmit}>
                <div className="form-top">
                    <h1 className='form-title'>{this.props.formType}</h1>
                    <br />
                    <br />
                    {this.addUsername()}
                    
                    <label className='login-signup-label'>Email
                    </label>
                    
                    <input className='login-signup-field' type="text" placeholder="    name@company.com" value={this.state.email} onChange={this.update('email')} />
                   
                    <label className='login-signup-label'>Password
                    </label>
                  
                    <input className='login-signup-field' type="password" placeholder="    password" value={this.state.password} onChange={this.update('password')} />
                    {this.addTeam()}
                </div>

                    {this.renderErrors()}
                <div className="form-bottom">
                    <br />
                    <input className='login-signup-button' type="submit" value={this.props.formType} />
                    {this.addDemo()}
                    {this.addLink()}
                </div>
                
            </form>
        )
    }
}

export default SessionForm;