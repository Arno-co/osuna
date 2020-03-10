import React from 'react';
import TeamIndexItem from './TeamIndexItem';



class TeamIndex extends React.Component {


    componentDidMount() {
        this.props.fetchTeams()
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.teams.map(team => <TeamIndexItem team={team} deleteTeam={this.props.deleteTeam} key={this.props.team.id} />)
                    }
                </ul>
                <CreateTeamFormContainer />
            </div>
        )
    }

}

export default TeamIndex;