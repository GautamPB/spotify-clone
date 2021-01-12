//logic for data layer is here
export const initialState = {
    user: null,
} //initial state of the data layer is that there is no user logged in

function reducer(state, action) { //state is the data layer, action is the operation to be performed on the data layer
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        default:
            return state
    }
}

export default reducer