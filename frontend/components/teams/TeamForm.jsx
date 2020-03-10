import React from 'react';
import { Link } from 'react-router-dom';

class TeamForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        }
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    render() {
        return(
            <form className='team-form'>
                <div className='form-top'>
                    <h2 className='form-title'>CREATE A TEAM</h2>
                    <label className='team-label'>Team Name</label>
                    <input className='team-field' type="text" placeholder="    your team name" value={this.state.name} onChange={this.update('name')} />
                    <label className='team-label'>Team description</label>
                    <input className='team-field' type="text" placeholder="    your team in a few words" value={this.state.description} onChange={this.update('description')} />
                </div>
                {/* {this.renderErrors()} */}
                <div className='form-bottom'>
                    <input className='team-button' type="submit" value="CREATE A TEAM" />
                </div>
            </form>
        )
    } 



}

export default TeamForm;