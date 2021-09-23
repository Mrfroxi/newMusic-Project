import React, { useState } from 'react'
import './Auth.css'
import { NavLink } from 'react-router-dom'
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../../utils/consts'
import { useAuthHook } from '../../hooks/authHook'

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const { isLogin, signIn } = useAuthHook(email, password)
    return (
        <div className="head">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form">
                        <span className="login100-form-title p-b-26">
                            Welcome
                        </span>
                        <span className="login100-form-title p-b-48">
                            <i className="zmdi zmdi-font"></i>
                        </span>

                        <div
                            className="wrap-input100 validate-input"
                            data-validate="Valid email is: a@b.c"
                        >
                            <input
                                className="input100"
                                type="text"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span
                                className="focus-input100"
                                data-placeholder="Email"
                            ></span>
                        </div>

                        <div
                            className="wrap-input100 validate-input"
                            data-validate="Enter password"
                        >
                            <span className="btn-show-pass">
                                <i className="zmdi zmdi-eye"></i>
                            </span>
                            <input
                                className="input100"
                                type="password"
                                name="pass"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                            />
                            <span
                                className="focus-input100"
                                data-placeholder="Password"
                            ></span>
                        </div>

                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
                                {isLogin ? (
                                    <button
                                        className="login100-form-btn"
                                        onClick={signIn}
                                    >
                                        Login
                                    </button>
                                ) : (
                                    <button
                                        className="login100-form-btn"
                                        onClick={signIn}
                                    >
                                        Registration
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="text-center p-t-115">
                            {isLogin ? (
                                <>
                                    <span className="txt1">
                                        Don’t have an account?
                                    </span>

                                    <NavLink
                                        className="txt2"
                                        to={REGISTRATION_ROUTE}
                                    >
                                        {' '}
                                        Sign Up{' '}
                                    </NavLink>
                                </>
                            ) : (
                                <>
                                    <span className="txt1">
                                        Have an account?
                                    </span>
                                    <NavLink className="txt2" to={LOGIN_ROUTE}>
                                        {' '}
                                        Sign Up{' '}
                                    </NavLink>
                                </>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth
