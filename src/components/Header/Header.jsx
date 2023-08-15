import React from 'react'
import styles from './Header.module.css'

const Header = () => {

    return (
        <div className={styles.header}>
            <img className={styles.logo} src="https://vailskibase.com/wp-content/uploads/2021/09/Salomon-logo.png" alt=""/>
            <h1 className={styles.title}>NoOse Social</h1>
            <div className={styles.login}>
                <button className={styles.login__btn}>LogIn</button>
                <button className={styles.registration__btn}>Registration</button>
            </div>
        </div>
    )
}

export default Header