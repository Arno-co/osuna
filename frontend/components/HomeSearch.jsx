import React from 'react';
import { Link } from 'react-router-dom';
import reactStringReplace from 'react-string-replace';


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
        this.handleDisplay = this.handleDisplay.bind(this);
        this.checkOptions = this.checkOptions.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);
    }


    handleDisplay(e){
        e.stopPropagation();
        this.setState({active: !this.state.active, inputText:''})
    }

    inputChange(e) {
        const value = e.target.value;
        if (this.state.active === false) {
            this.setState({ inputText: value, active: true }, () => this.checkOptions())
        } else {
            this.setState({ inputText: value }, () => this.checkOptions())
        }
    }

    checkOptions(){
        const projectOptions = [];
        const taskOptions = [];

        this.props.projects.forEach(project => {
            if (project.title.toLowerCase().includes(this.state.inputText.toLowerCase())) {
                projectOptions.push(project)
            } else {
                return projectOptions;
            }
        })

        this.props.tasks.forEach(task => {
            if (task.title.toLowerCase().includes(this.state.inputText.toLowerCase())) {
                taskOptions.push(task)
            }
        })

        this.setState({ projectOptions: projectOptions, taskOptions: taskOptions })
    }

    renderOptions() {
      
        return(
            <div className='search-dropdown-container'>
                <div className='dropdown-title'>PROJECTS</div>
                {(this.state.projectOptions.length === 0) ? 
                    <div>No projects found</div> 
                    : 
                    <ul>{
                    this.state.projectOptions.map((project) => {
                        return (
                            <Link to={`/projects/${project.id}`} key={project.id} onClick={(e) => this.handleDisplay(e)}>
                                <li className='dropdown-option'>{reactStringReplace(project.title, this.state.inputText, (match, i) => <span className="hl" key={i}>{match}</span>)}</li>
                             </Link>
                        )
                    })
                    }</ul>}
                <div className='dropdown-title'>TASKS</div>
                {(this.state.taskOptions.length === 0) ?
                    < div > No tasks found</div>
                    : 
                    <ul>{
                    this.state.taskOptions.map((task) => {
                        return (
                            <Link to={`/projects/${task.projectId}/${task.id}`} key={task.id} onClick={(e) => this.handleDisplay(e)}>
                                <li className='dropdown-option'>{reactStringReplace(task.title, this.state.inputText, (match, i) => <span className="hl" key={i}>{match}</span>)}</li>
                            </Link>
                        )
                    })
                    }</ul>
                }
            </div>
        )
    
    }

    handleDropDown() {
         
        if(this.state.inputText.length === 0) {
            return null;
        } else if (this.state.projectOptions.length === 0 && this.state.taskOptions.length === 0) {
            return (
                <div className='search-dropdown-container'>No results found.</div>
            );
        } else {
            return this.renderOptions()
        }
    }

    render() {
        let active;
        (this.state.active) ? active = 'home-search-container-large' : active = 'home-search-container' 
        return(
            <div className='home-search-bar'>
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
                {this.handleDropDown()}
                </div>
            </div>
        )
    }
}

export default HomeSearch;