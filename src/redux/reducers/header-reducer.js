const SET_STATUS = 'SET_STATUS';

const initializationState = {
    status: 'Прежде чем действовать, надо понять'
}

const headerReducer = (state = initializationState, action) => {
    switch(action.type) {
        case SET_STATUS:
            return {
                ...state,
                profileStatus: action.status
            }
        default:
            return {
                ...state
            }
    }
}

export const setHeaderStatus = (status) => ({type: SET_STATUS, status });
export default headerReducer;