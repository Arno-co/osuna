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

    handleColor(title) {
        const initial = title.slice(0, 1).toUpperCase();

        if (['A', 'B', 'C', 'D', 'E'].includes(initial)) {
            return '#4186e0'
        } else if (['G', 'H', 'I', 'J', 'K', 'L'].includes(initial)) {
            return '#e8384f'
        } else if (['M', 'N', 'O', 'P', 'Q'].includes(initial)) {
            return '#3ad580'
        } else if (['R', 'S', 'T', 'U'].includes(initial)) {
            return '#4186e0'
        } else if (['V', 'W', 'X', 'Y', 'Z'].includes(initial)) {
            return '#e8384f'
        } else {
            return '#eec300'
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
                                    <div className='team-member' style={{ background: this.handleColor(user.username) }}>{this.handleName(user.username)}
                                        <div className='team-member-hover' key={idx} style={{ background: this.handleColor(user.username) }}>
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