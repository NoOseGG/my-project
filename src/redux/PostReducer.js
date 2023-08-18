export const ACTION_ADD_POST = "ADD_POST"

const defaultState = {
    posts: [{
        avatar: "https://sun6-22.userapi.com/s/v1/ig2/TIgI-LBFvZ5weVev03VmHAjoPZRfZIOHAJmvFbALh2PkGH3k0cxHIgAkKSYpYSyuatNuevnBHwC6pB36cKJSPT34.jpg?size=899x899&quality=95&crop=0,0,899,899&ava=1",
        text: "Hello React"
    }]
}

const postReducer = (state = defaultState, action) => {

    switch (action.type) {

        case ACTION_ADD_POST:
            let newPost = {
                avatar: "https://sun6-22.userapi.com/s/v1/ig2/TIgI-LBFvZ5weVev03VmHAjoPZRfZIOHAJmvFbALh2PkGH3k0cxHIgAkKSYpYSyuatNuevnBHwC6pB36cKJSPT34.jpg?size=899x899&quality=95&crop=0,0,899,899&ava=1",
                text: action.payload
            }
            debugger
            return {...state, posts: [...state.posts, newPost]}

        default:
            return defaultState
    }
}

export default postReducer
