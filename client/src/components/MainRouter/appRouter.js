import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import {publicRoutes,authRoutes} from '../../routes'
import {MAIN_ROUTE} from '../../utils/consts'
import {useSelector,useDispatch} from 'react-redux'

function AppRouter() {
  const dispatch = useDispatch()
  const user = useSelector(state=> {
    return state.UserReducer
  })

  return (
    <Switch>
      {/* {user.isAuth  && authRoutes.map( ({path,Component}) =>
      <Route key={path} path={path} component={Component} exact/>
      )} */}
      {publicRoutes.map( ({path,Component}) =>
              <Route key={path} path={path} component={Component} exact/>
            )}
      <Redirect to={MAIN_ROUTE}/>
    </Switch>
  );
}

export default AppRouter;


