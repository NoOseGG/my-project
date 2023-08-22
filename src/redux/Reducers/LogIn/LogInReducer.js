export const ACTION_LOGIN = "ACTION_LOGIN"

const defaultState = {
    uid: "",
    token: ""
}


export const LogInReducer = (state = defaultState, action) => {
    switch (action.type) {

        case ACTION_LOGIN:
            return {...state, email: action.payload.uid, password: action.payload.token}

        default:
            return state
    }
}