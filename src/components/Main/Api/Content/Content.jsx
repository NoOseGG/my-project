import React, {useEffect, useState} from 'react'
import styles from './Content.module.css'
import {useSelector} from "react-redux";
import Item from "./Item/Item";
import item from "./Item/Item";

const Content = () => {

    const {data, loading, error} = useSelector(state => state.api)
    const [items, setItems] = useState([])

    console.log(data)

    useEffect(() => {
        console.log(`DATA: ${data}`)
        if (typeof data.results !== 'undefined') {
            const items = data.results.map(item => {
                    return <Item item={item}/>
                }
            )
            setItems(items)
        }

    }, [data])


    useEffect(() => {
        console.log("LOADING")
    }, [loading])

    useEffect(() => {
        console.log("ERROR")
    }, [error])


    return (
        <div className={styles.container}>
            {items}
        </div>
    )
}

export default Content