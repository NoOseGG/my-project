import React from 'react'
import styles from './Posts.module.css'
import Post from "./Post/Post";
import {useSelector} from "react-redux";

const Posts = (props) => {

    const postsSelect = useSelector(state => state.posts.posts)

    let posts = postsSelect.map(
        (el) => {
            return <Post post={el}/>
        }
    )

    return (
        <div className={styles.posts}>
            {posts}
        </div>
    )
}

export default Posts