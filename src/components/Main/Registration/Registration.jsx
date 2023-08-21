import React from 'react';
import styles from "../Login/Login.module.css";

const Registration = () => {
    return (
        <div className={styles.container}>
            <h2>Login</h2>
            <input type="email"/>
            <h2>Password</h2>
            <input type="text"/>
            <h2>Repeat password</h2>
            <input type="text"/>
            <input className={styles.submit} type="submit"/>
        </div>
    );
};

export default Registration;