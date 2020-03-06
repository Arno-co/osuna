import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import { AuthRoute } from '../util/route_util'
import LoginFormContainer from './LoginFormContainer';
import SignupFormContainer from './SignupFormContainer';

function Modal({ modal, closeModal, clearErrors }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            // component = <AuthRoute path="/signup" component={LoginFormContainer} />
            break;
        case 'signup':
            component = <SignupFormContainer />;
            // component = <AuthRoute path="/login" component={LoginFormContainer} />;
            break;
        default:
            return null;
    }

    const handleClearErrors= (e) => {
        console.log(e);
        e.stopPropagation(); 
        clearErrors()
        
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={handleClearErrors}>
                {component}
            </div>
        </div>
    );
}


const mapStateToProps = state => ({
        
    modal: state.ui.modal
})
const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);