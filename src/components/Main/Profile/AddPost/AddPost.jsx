import React, {useRef} from 'react'
import styles from './AddPost.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ACTION_ADD_POST} from "../../../../redux/PostReducer";

const AddPost = (props) => {
    const newMessageElement = useRef()
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)

    console.log({posts})

    const addPost = () => {
        let message = newMessageElement.current.value
        debugger
        dispatch({type: ACTION_ADD_POST, payload: message})
    }

    return (
        <div className={styles.addPost}>
            <textarea className={styles.input} ref={newMessageElement} cols="30" rows="5"></textarea>
            <br/>
            <button className={styles.addButton} onClick={addPost}>Add Post</button>
        </div>
    )
}

export default AddPost