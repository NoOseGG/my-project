import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import postReducer from "./PostReducer";
import apiReducer from "./ApiReducer";


const rootReducer = combineReducers({
    posts: postReducer,
    api: apiReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


