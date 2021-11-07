export const initialState = {
    user: null
}

export const actionTypes = {
    SET_USER: 'SET_USER'
}

const reducer = (initialState, action) => {
    console.log(action)

    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...initialState,
                user: action.user
            }
        case actionTypes.SET_TEST:
            return {
                ...initialState,
                testDetails: action.testDetails
            }
        default:
            return initialState
    }
}

export default reducer