import React from 'react'
import styles from './Profile.module.css'
import UserPage from "./UserPage/UserPage";
import Posts from "./Posts/Posts";
import AddPost from "./AddPost/AddPost";

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <UserPage />
            <AddPost addPost={props.addPost}/>
            <Posts posts={props.posts}/>
        </div>
    )
}

export default Profile