import React, {useEffect, useRef, useState} from 'react';
import styles from './Login.module.css'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../../redux/Reducers/LogIn/FetchAuth";

export const TOKEN = "TOKEN"

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    const token = useSelector(state => state.login.token)

    useEffect(() => {
        console.log(`TOKEN: ${token}`)
        localStorage.setItem(TOKEN, token)
    }, [token])

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