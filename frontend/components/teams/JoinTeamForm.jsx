import React from 'react';



class JoinTeamForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.teams;
        this.handleSubmit = this.handleSubmit.bind(this);

        
    }

    componentDidMount() {
        this.props.fetchTeams()
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    handleSubmit(e) {

        e.preventDefault();
        e.stopPropagation();
        const team = Object.assign({}, this.state);
        this.props.joinTeam(team).then(() => {

            this.props.openModal('signup');
            // localStorage.getItem(this.state.username, JSON.parse(this.state));
            // this.state = JSON.parse(localStorage.getItem(this.state.username))
        }
        )
    }
    render() {
     
        // return <h1>hi</h1>
        if (!this.props.teams) {
            return null;
        }
        const teams = this.props.teams.map(team => {
            
            return (<option value={team.name}>{team.name}</option>)
        })
        return (
            
                <form className='team-form' onSubmit={this.handleSubmit}>
                    <div className='form-top'>
                        <h2 className='form-title'>JOIN A TEAM</h2>
                        <label className='team-label'>Pick a team</label>
                        <select className='team-field' type="text" placeholder="    your team name" >
                            {
                                // {teams}
                            }
             
                        </select>
                    </div>
                    {/* {this.renderErrors()} */}
                    <div className='form-bottom'>
                        <input className='team-button' type="submit" value="JOIN A TEAM" />
                    </div>
                </form>

        )
    }

}

export default JoinTeamForm;