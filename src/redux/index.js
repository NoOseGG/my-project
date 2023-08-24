import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import postReducer from "./Reducers/Posts/PostReducer";
import apiReducer from "./Reducers/Api/ApiReducer";
import {LogInReducer} from "./Reducers/LogIn/LogInReducer";


const rootReducer = combineReducers({
    posts: postReducer,
    api: apiReducer,
    login: LogInReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


