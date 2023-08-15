import React from 'react'
import styles from './Profile.module.css'
import UserPage from "./UserPage/UserPage";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <UserPage />
            <Posts posts={props.posts}/>
        </div>
    )
}

export default Profile