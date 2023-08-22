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
            <div className={styles.unn}>
                <strong>УНП:</strong> {data.results[0].unn}
            </div>
            <div className={styles.registration}>
                <strong>Дата регистрации:</strong> {data.results[0].date_reg}
            </div>

            <div className={styles.fullName}>
                <strong>Полное название:</strong> {data.results[0].full_name}
            </div>
        </div>
    )
}

export default Content