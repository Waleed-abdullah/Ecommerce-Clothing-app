export const initialState = {
    user: null,
    userExists: false,
}

export const actionTypes = {
    SET_USER: 'SET_USER',
    SET_USER_EXISTS: 'SET_USER_EXISTS',
}

const reducer = (initialState, action) => {

    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...initialState,
                user: action.user
            }
        case actionTypes.SET_USER_EXISTS:
            return{
                ...initialState,
                userExists: action.userExists
            }
        default:
            return initialState
    }
}

export default reducer