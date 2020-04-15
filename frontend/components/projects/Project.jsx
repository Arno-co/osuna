import React from 'react';
import SideBarContainer from '../SideBarContainer';

class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <SideBarContainer />
                PROJECT GOES HERE
                </div>
        )
    }


}

export default Project