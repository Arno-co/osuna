import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = {type: null, id: null}, action) => {

    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return { type: null, id: null };
        default:
            return state;
    }

}

export default modalReducer;