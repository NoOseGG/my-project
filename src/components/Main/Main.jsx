import React from 'react'
import styles from './Main.module.css'
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";

const Main = (props) => {
    return (
        <div className={styles.main}>
                <Routes>
                    <Route path="/profile" element={<Profile posts={props.posts}/>}></Route>
                    <Route path="/messages" element={<Messages />}></Route>
                </Routes>
        </div>
    )
}

export default Main