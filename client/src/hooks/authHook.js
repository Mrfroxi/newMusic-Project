import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login, registration } from '../http/userAPI'
import { useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts'

export const useAuthHook = (email, password) => {
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const dispatch = useDispatch()
    const signIn = async (e) => {
        e.preventDefault()
        try {
            let infoUser
            if (isLogin) {
                infoUser = await login(email, password)
                console.log('complete')
            } else {
                infoUser = await registration(email, password)
            }

            dispatch({ type: 'SetIsAuth' })

            dispatch({
                type: 'SetUser',
                info: {
                    email,
                },
            })

            history.push(MAIN_ROUTE)
        } catch (e) {
            alert('incorrect email or password')
        }
    }
    return { signIn, isLogin }
}
