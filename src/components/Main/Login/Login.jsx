import React, {useEffect, useRef, useState} from 'react';
import styles from './Login.module.css'
import axios from "axios";
import {useDispatch} from "react-redux";
import {fetchAuth} from "../../../redux/Reducers/LogIn/FetchAuth";

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(`${email} ${password}`)
    }, [email, password])

    const logIn = () => {
        console.log('login')
        console.log(`${email} ${password}`)

        dispatch(fetchAuth({
            email: email,
            password: password
        }))
    }

    return (
        <div className={styles.container}>
            <h2>Login</h2>
            <input onChange={(email) =>
                setEmail(email.currentTarget.value)
            } type="email"/>
            <h2>Password</h2>
            <input onChange={(password) =>
                setPassword(password.currentTarget.value)
            } type="text"/>
            <input className={styles.submit} onClick={logIn} type="submit"/>
        </div>
    );
};

export default Login;