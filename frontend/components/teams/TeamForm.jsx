import React from 'react';
import { Link } from 'react-router-dom';

class TeamForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    handleSubmit(e) {

        e.preventDefault();
        e.stopPropagation();
        const team = Object.assign({}, this.state);
        this.props.createTeam(team).then((result) => {
            // LOCAL STORAGE FOR TEAM_ID
            localStorage.setItem('myTeamInfo', JSON.stringify({
                id: result.team.id,
                name: this.state.name,
                description: this.state.description
            }));
            this.props.openModal('signup');
        
        }
        )
    }

    render() {
        return(
            <form className='team-form' onSubmit={this.handleSubmit}>
                <div className='form-top'>
                    <h2 className='form-title'>CREATE A TEAM</h2>
                    <label className='team-label'>Team Name</label>
                    <input className='team-field' type="text" placeholder="    your team name" value={this.state.name} onChange={this.update('name')} required/>
                    <label className='team-label'>Team description</label>
                    <input className='team-field' type="text" placeholder="    your team in a few words" value={this.state.description} onChange={this.update('description')} />
                </div>
                {/* {this.renderErrors()} */}
                <div className='form-bottom'>
                    <input className='team-button' type="submit" value="CREATE A TEAM"/>
                </div>
            </form>
        )
    } 



}

export default TeamForm;