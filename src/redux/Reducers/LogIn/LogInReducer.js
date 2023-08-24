export const ACTION_LOGIN = "ACTION_LOGIN"

const defaultState = {
    token: "",
    user: {
        id: "",
        first_name: "",
        last_name: "",
        email: ""
    }
}


export const LogInReducer = (state = defaultState, action) => {
    switch (action.type) {

        case ACTION_LOGIN:
            return {...state, token: action.payload.token, user: action.payload.user}

        default:
            return state
    }
}