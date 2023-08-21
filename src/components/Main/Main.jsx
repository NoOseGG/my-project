import React from 'react'
import styles from './Main.module.css'
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import Api from "./Api/Api";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";

const Main = (props) => {
    return (
        <div className={styles.main}>
                <Routes>
                    <Route path="/profile" element={<Profile posts={props.posts} addPost={props.addPost}/>}></Route>
                    <Route path="/messages" element={<Messages />}></Route>
                    <Route path="/api" element={<Api />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/registration" element={<Registration />}></Route>
                </Routes>
        </div>
    )
}

export default Main