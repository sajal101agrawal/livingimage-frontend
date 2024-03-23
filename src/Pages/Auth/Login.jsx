import React, { useState, useEffect, useRef } from 'react';
import styles from './Login.module.css';
import backButtonIcon from './../../assets/icons/arrow-left.png'

const Login = () => {
    const [current, setCurrent] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const nextHandler = () => {
        if (current === 0) {
            setCurrent(current + 1);
        } else if (current === 1){

        }
    }

    const backHandler = () => {
        if (current === 1) {
            setCurrent(current - 1);
        }
    }


    return (
        <section className={styles["section"]}>
           <div className={styles["login-form-container"]}>
            <h1 className={styles["login-form-heading"]}>Login</h1>
            <div className={styles["login-form"]}>
                <input className={styles["input"]} style={current === 0 ? {display: 'block'} : {display: 'none'}} type="email" name="email" id="email" placeholder='your email?'/>
                <input className={styles["input"]} style={current === 0 ? {display: 'none'} : {display: 'block'}} type="password" name="email" id="email" placeholder='your password?'/>
                <button className={styles["back-button"]} onClick={backHandler} style={current === 0 ? {display: 'none'} : {display: 'block'}}><img className={styles["back-button-icon"]} src={backButtonIcon} alt="back" />Back</button>
                <button className={styles["next-button"]} onClick={nextHandler}>{current === 0 ? 'Next' : 'Login'}</button>
            </div>
           </div>
        </section>
    );
}

export default Login;
