import React from 'react';



class JoinTeamForm extends React.Component {


    componentDidMount() {
        this.props.fetchTeams()
    }

    render() {


        return (
            <div>
                <form className='team-form'>
                    <div className='form-top'>
                        <h2 className='form-title'>JOIN A TEAM</h2>
                        <label className='team-label'>Pick a team</label>
                        <select className='team-field' type="text" placeholder="    your team name" value={this.state.name} onChange={this.update('name')}>
                            {
                                this.props.teams.map(team => <option value={team.name}>{team.name}</option>)
                            }
             
                        </select>
                    </div>
                    {/* {this.renderErrors()} */}
                    <div className='form-bottom'>
                        <input className='team-button' type="submit" value="JOIN A TEAM" />
                    </div>
                </form>
                <ul>
                </ul>
                
            </div>
        )
    }

}

export default JoinTeamForm;