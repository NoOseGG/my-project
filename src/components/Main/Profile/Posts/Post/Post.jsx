import React from 'react'
import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={styles.post} >
            <img className={styles.avatar} src={props.post.avatar} alt=""/>
            <p className={styles.text}>{props.post.text}</p>
        </div>
    )
}

export default Post