import React from 'react';


class HomeSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            active: false
        };
    }

    handleDisplay(e){
        e.preventDefault();
        e.stopPropagation();
        this.setState({active: !this.state.active})
    }

    render() {
        let active;
        (this.state.active) ? active = 'home-search-container-large' : active = 'home-search-container' 
        return(
            <div className={active} onClick={(e) => this.handleDisplay(e)}>
                <form>
                    <span className='search-icon-container'>
                        <i className="fas fa-search fa-s"></i>
                    </span>
                    <input type="search" placeholder='Search'/>
                </form>
            </div>
        )
    }
}

export default HomeSearch;