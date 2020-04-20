import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { clearErrors } from '../actions/session_actions';
import { connect } from 'react-redux';
import { AuthRoute } from '../util/route_util'
import LoginFormContainer from './LoginFormContainer';
import SignupFormContainer from './SignupFormContainer';
import TeamFormContainer from './teams/TeamForm';
import CreateTeamFormContainer from './teams/CreateTeamFormContainer';
import JoinTeamFormContainer from './teams/JoinTeamFormContainer';
import CreateProjectFormContainer from './projects/CreateProjectFormContainer';
import EditProjectFormContainer from './projects/EditProjectFormContainer';
import DeleteProjectFormContainer from './projects/DeleteProjectFormContainer';

function Modal(props) {

    if (!props.type) {
        return null;
    }
    let component;
    switch (props.type) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'createTeam':
            component = <CreateTeamFormContainer />;
            break;
        case 'joinTeam':
            component = <JoinTeamFormContainer />;
            break;
        case 'createProject':
            component = <CreateProjectFormContainer />;
            break;
        case 'editProject':
            component = <EditProjectFormContainer />;
            break;
        case 'deleteProject':
            component = <DeleteProjectFormContainer />;
            break;
        default:
            return null;
    }

    const handleClearErrors= (e) => {
        e.stopPropagation(); 
        props.clearErrors()
        
    }

    return (
        <div className="modal-background" onClick={props.closeModal}>
            <div className="modal-child" onClick={handleClearErrors}>
                {component}
            </div>
        </div>
    );
}


const mapStateToProps = state => ({
        
    type: state.ui.modal.type,
    id: state.ui.modal.id
})
const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);