import React,{ useEffect } from 'react'
import AppRouter from './components/appRouter';
import NavBar from './components/navBar'
import {useSelector,useDispatch} from 'react-redux'
import {takeTrack,takeFavouriteTrack} from './http/trackAPI'
import {takeusers} from './http/adminAPI'
import {takeplayLists} from './http/playListAPI'
function App() { 
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem('token')
    token && dispatch({type:"SetIsAuth"})
    takeTrack().then(data => {
      dispatch({type:'GET_ALL_OWNER_TRACK' , allTrack:[...data.Ownertracks]})
      dispatch({type:'GET_ALL_Track' , allTrack:[...data.tracks]})
    }
    )
    takeFavouriteTrack().then(data => dispatch({type:'GET_ALL_FAVOURITE_TRACK' , tracks:[...data]}))
    takeusers().then(data =>dispatch({type:'GET_ALL_USERS' , allUser:[...data]}))
  },[])
  return (
    <div>
      <NavBar/>
      <AppRouter/>
    </div>
  )
}
export default App
