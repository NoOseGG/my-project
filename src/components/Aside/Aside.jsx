import React from 'react'
import styles from './Aside.module.css'
import {NavLink} from "react-router-dom";

const Aside = () => {
    return (
        <div className={styles.aside}>
            <nav className={styles.menu}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink className={styles.link} to="/profile">Profile</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink className={styles.link} to="/messages">Messages</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink className={styles.link} to="/api">Api</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Aside