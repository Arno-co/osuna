import React from 'react';


class Team extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleName(name) {
        let nameArray = name.split(' ');
        if (nameArray.length === 1) {
            return name.slice(0,1).toUpperCase()
        } else {
            return nameArray[0].slice(0, 1).toUpperCase().concat(nameArray[nameArray.length-1].slice(0, 1).toUpperCase())
        }
    }
    render() {

        return(

            <div className='team-container'>
                <div className='team-member-container'>
                    {
                        this.props.users.map((user, idx) => {
                            return (
                                <div key={idx}>
                                    <div className='team-member'>{this.handleName(user.username)}
                                        <div className='team-member-hover' key={idx}>
                                            <div>{user.username}</div>
                                            <br/>
                                            <div>{this.props.teams.length ? this.props.teams[0].name : null}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }


}

export default Team