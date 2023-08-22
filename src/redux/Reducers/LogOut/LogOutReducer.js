export const ACTION_LOGOUT = "ACTION_LOGOUT"


const defaultState = { }


export const LogInReducer = (state = defaultState, action) => {
    switch (action.type) {

        case ACTION_LOGOUT:
            return {...state}

        default:
            return state
    }
}