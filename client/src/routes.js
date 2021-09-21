import {MAIN_ROUTE,LOGIN_ROUTE,REGISTRATION_ROUTE,ADMIN_ROUTE,PLAYLIST_ITEM} from "./utils/consts"
import Auth from './pages/Auth'
import Main from './pages/Main'
import Admin from "./pages/Admin"
import UsersList from "./components/usersList"
import ElementPlayList from './components/trackInPlayList'
import OwnerTrack from './components/ownerTrack'
import PersonMusic from './components/personMusic'
import PlayLists from './components/mainPlayLists'
import MainPlayLists from './components/mainPlayLists'
import AdminTracksList from './components/admintracks'
export const authRoutes = [
  {
    path:LOGIN_ROUTE,
    Component:Auth
  },
  {
    path:ADMIN_ROUTE,
    Component:Admin
  },
  {
    path:MAIN_ROUTE,
    Component:Main
  },
]

export const publicRoutes = [
  {
    path:ADMIN_ROUTE,
    Component:Admin
  },
  {
    path:LOGIN_ROUTE,
    Component:Auth
  },
  {
    path:REGISTRATION_ROUTE,
    Component:Auth
  },
  {
    path:MAIN_ROUTE,
    Component:Main
  },
  {
    path:'/admin/Users',
    Component:UsersList
  },
  {
    path:'/main/PlayLists',
    Component:PlayLists
  },
  {
    path:'/main/FavaouriteTrack',
    Component: PersonMusic
  },
  {
    path:'/main/YourPlayList',
    Component: MainPlayLists
  },
  {
    path:'/main/YourTracks',
    Component:OwnerTrack
  },
  {
    path: PLAYLIST_ITEM + '/:id',
    Component:ElementPlayList
  },
  {
    path:'/admin/AdminTracks',
    Component:AdminTracksList
  }
]
