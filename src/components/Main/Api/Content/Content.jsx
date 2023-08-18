import React, {useEffect, useState} from 'react'
import styles from './Content.module.css'
import {useSelector} from "react-redux";
import axios from "axios";

const Content = () => {

    const data = useSelector(state => state.api.data)

    console.log(data)

    useEffect(() => {
        console.log(data)
    }, [data])

    return(
        <div className={styles.container}>
            <div className={styles.registration}>
                {data.age_full}
            </div>
        </div>
    )
}

export default Content