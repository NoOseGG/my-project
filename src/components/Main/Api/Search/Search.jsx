import React, {useRef} from 'react'
import styles from './Search.module.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../../../redux/Reducers/Api/FetchData";

const Search = () => {
    const dispatch = useDispatch()
    const inputRef = useRef()
    // const upn = useSelector(state => state.api.upn)

    const searchUpn = () => {
        let unp = inputRef.current.value
        console.log(`unp: ${unp}`)
        dispatch(fetchData(unp))
    }

    return (
        <div className={styles.counter}>
            {/*<input*/}
            {/*    className={styles.input}*/}
            {/*    ref={inputRef}*/}
            {/*    type="text"*/}
            {/*    placeholder="search"*/}
            {/*    onChange={searchUpn}*/}
            {/*/>*/}
            {/*<button*/}
            {/*    className={styles.send__btn}*/}
            {/*    onClick={searchUpn}*/}
            {/*>*/}
            {/*    Send*/}
            {/*</button>*/}


        </div>
    )
}

export default Search