import React, { useState } from 'react'
import  './style/Auth.css'
import {NavLink,useLocation} from 'react-router-dom'
import {REGISTRATION_ROUTE,LOGIN_ROUTE, MAIN_ROUTE} from '../utils/consts'
import { login, registration } from '../http/userAPI'
import {useSelector,useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom"

const  Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
	const history = useHistory()
	const[email,setEmail] = useState('')
	const[password,setpassword] = useState('')

	const dispatch = useDispatch()
  const user = useSelector(state=> {
    return state.UserReducer
  })

	const isAuth = (localtoken) => {
		if(localtoken){
			return  login(email,password);
		}
		return  registration(email,password)
	}

	const signIn = async (e) =>{
		e.preventDefault();
		try{
			let infoUser;
			if(isLogin){
				infoUser = await login(email,password);
				console.log('complete')
			}else{
				infoUser = await registration(email,password)
			}

			dispatch({type:'SetIsAuth'})

			dispatch({type:'SetUser', info:{
				email,
			}})

			history.push(MAIN_ROUTE)

		}catch(e){
			alert("incorrect email or password")
		}
	}

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

					<div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<input className="input100" type="text" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
						<span className="focus-input100" data-placeholder="Email"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<span className="btn-show-pass">
							<i className="zmdi zmdi-eye"></i>
						</span>
						<input className="input100" type="password" name="pass" value={password} onChange={e => setpassword(e.target.value)} />
						<span className="focus-input100" data-placeholder="Password"></span>
					</div>

					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							{isLogin ? 		<button className="login100-form-btn" onClick={signIn}>
								Login
							</button>:
							<button className="login100-form-btn" onClick={signIn}>
								Registration
							</button>
							}
						</div>
					</div>

					<div className="text-center p-t-115">
						{isLogin ? 	
						<>
						<span className="txt1">
							Don’t have an account?
						</span> 

						<NavLink className = 'txt2'to ={REGISTRATION_ROUTE}>	Sign Up </NavLink>
						</> :
						<>
						<span className="txt1">
							 Have an account?
						</span> 
						<NavLink className = 'txt2'to ={LOGIN_ROUTE}>	Sign Up </NavLink>
						</>
						}
					</div>
				</form>
			</div>
		</div>
	</div>
  );
}

export default Auth;
