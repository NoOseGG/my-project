import React from 'react';
import styles from './Item.module.css'

const Item = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div>УНП: {props.item.unn}</div>
                <div>Дата Регистрации: {props.item.date_reg}</div>
                <div>Полное название: {props.item.full_name}</div>
            </div>
            <div className={styles.rightSide}>
                <div>Адрес: {props.item.full_address}</div>
                <div>Статус код: {props.item.status_code}</div>
                <div>Статус: {props.item.status_name}</div>
            </div>
        </div>
    );
};

export default Item;