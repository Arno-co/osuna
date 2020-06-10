import React from 'react';


class HomeSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            active: false,
            inputText: '',
            projectOptions: [], 
            taskOptions: []
        };
        this.inputChange = this.inputChange.bind(this);
    }

    handleDisplay(e){
        e.preventDefault();
        e.stopPropagation();
        this.setState({active: !this.state.active})
    }

    inputChange(e) {
        const value = e.target.value;
        this.setState({inputText: value})
        console.log(this.state.value)
    }

    checkOptions(){
        const projectOptions = [];
        const taskOptions = [];

        this.props.projects.forEach(project => {
            if (project.title.toLowerCase().includes(this.state.inputText.toLowerCase())) {
                projectOptions.push(project)
            }
        })

        this.props.tasks.forEach(task => {
            if (task.title.toLowerCase().includes(this.state.inputText.toLowerCase())) {
                taskOptions.push(task)
            }
        })

        if(projectOptions.length === 0 && taskOptions.length === 0) {
            return null;
        } else {
            this.setState({projectOptions: projectOptions, taskOptions: taskOptions})
        }  
    }

    renderOptions() {
        return(
            <div>
                <div>Projects</div>
                <div>{
                    this.state.projectOptions.map((project) => {
                        console.log(project.title)
                        return(
                        <div>{project.title}</div>
                        )
                    })
                    }</div>
            </div>
        )
    }

    render() {
        let active;
        (this.state.active) ? active = 'home-search-container-large' : active = 'home-search-container' 
        return(
            <div>
                <div className={active} onClick={(e) => this.handleDisplay(e)}>
                    <form>
                        <span className='search-icon-container'>
                            <i className="fas fa-search fa-s"></i>
                        </span>
                        <input
                            type="search"
                            onChange={this.inputChange}
                            value={this.state.inputText}
                            placeholder='Search' />
                    </form>
                </div>
                <div>
                    {this.renderOptions()}
                </div>
            </div>
        )
    }
}

export default HomeSearch;