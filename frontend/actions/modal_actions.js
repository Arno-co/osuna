export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (type, id=null) => {
    return {
        type: OPEN_MODAL,
        modal: {type: type, id: id}
    }
}

export const closeModal = () => ({
    type: CLOSE_MODAL
})