import React from 'react'
import styles from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {

    let posts = props.posts.map(
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