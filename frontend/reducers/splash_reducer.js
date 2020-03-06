import { OPEN_MODAL } from '../actions/modal_actions';
import { CLEAR_ERRORS } from '../actions/session_actions'

const splashReducer = (state = null, action) => {

    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }

}

export default splashReducer;