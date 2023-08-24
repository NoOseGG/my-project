import React, {useEffect, useState} from 'react'
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {TOKEN} from "../Main/Login/Login";
import {useSelector} from "react-redux";


const Header = () => {

    const user = useSelector(state => state.login.user)
    const [userName, setUserName] = useState("LogIn")

    useEffect(() => {
        setUserName(user.email)
    }, [user])

    const logOut = async () => {
        const headers = {
            "Authorization": `Welcome ${localStorage.getItem(TOKEN)}`
        }

        console.log(`LOGOUT ${JSON.stringify(headers)}`)

        await axios.post("http://93.125.0.140:1338/api/v1/auth/logout/", {}, {headers})
            .then(response => {
                console.log("status 200")
                localStorage.removeItem(TOKEN)
                setUserName("LogIn")
            })

    }

    return (
        <div className={styles.header}>
            <img className={styles.logo} src="https://vailskibase.com/wp-content/uploads/2021/09/Salomon-logo.png"
                 alt=""/>
            <h1 className={styles.title}>NoOse Social</h1>
            <div className={styles.login}>
                <button className={styles.login__btn}>
                    <NavLink className={styles.login__link} to="/login">
                        {userName}
                    </NavLink>
                </button>
                <button className={styles.registration__btn}>
                    <NavLink className={styles.login__link} to="/registration">Registration</NavLink>
                </button>
                <button className={styles.logout__btn} onClick={logOut}>
                    LogOut
                </button>
            </div>
        </div>
    )
}

export default Header