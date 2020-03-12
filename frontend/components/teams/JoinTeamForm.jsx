import React from 'react';



class JoinTeamForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: ''
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        
        

    
    
    
}

    grabElement() {
    
    
   ( (document.getElementsByTagName('select'))[0]).addEventListener('mouseup', function (event) {
    })
    }

    componentDidMount() {
        this.props.fetchTeams()
    }

    update(event) {
            this.grabElement();
            this.setState({ id: event.currentTarget.value }) 
    }

    handleSubmit(e) {
       
        e.preventDefault();
        e.stopPropagation();
        const team = Object.assign({}, this.state);
        console.log(team);
        
       
        localStorage.setItem('myTeamInfo', JSON.stringify({
            id: this.state.id,
            name: this.props.teams[this.state.id].name
        }));
        this.props.openModal('signup');

    }
        
    
    render() {
     
        if (!this.props.teams) {
            return null;
        }

        return (
            
                <form className='team-form' onSubmit={this.handleSubmit}>
                    <div className='form-top'>
                        <h2 className='form-title'>JOIN A TEAM</h2>
                        <label className='team-label'>Pick a team</label>
                    <select className='team-field' ref={(input) => this.menu=input} type="text" placeholder="    your team name" required onChange={(event) => this.update(event)}>
                        <option value="">-----------------Teams-----------------</option>
                            {
                            Object.values(this.props.teams).map(team => {

                                return (<option value={team.id} key={team.id}>{team.name}</option>)
                            })
                            }
                    </select>
                    </div>
                    {/* {this.renderErrors()} */}
                    <div className='form-bottom'>
                        <input className='team-button' type="submit"  />
                    </div>
                </form>

        )
        
    }

}

export default JoinTeamForm;