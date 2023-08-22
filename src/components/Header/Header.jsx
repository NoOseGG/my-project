import React from 'react'
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = () => {

    const handlerLogOut = () => {

    }

    return (
        <div className={styles.header}>
            <img className={styles.logo} src="https://vailskibase.com/wp-content/uploads/2021/09/Salomon-logo.png"
                 alt=""/>
            <h1 className={styles.title}>NoOse Social</h1>
            <div className={styles.login}>
                <button className={styles.login__btn}>
                    <NavLink className={styles.login__link} to="/login">LogIn</NavLink>
                </button>
                <button className={styles.registration__btn}>
                    <NavLink className={styles.login__link} to="/registration">Registration</NavLink>
                </button>
                <button className={styles.logout__btn}>
                    LogOut
                </button>
            </div>
        </div>
    )
}

export default Header