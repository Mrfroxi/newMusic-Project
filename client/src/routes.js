import {MAIN_ROUTE,LOGIN_ROUTE,REGISTRATION_ROUTE,PLAYLIST_ITEM} from "./utils/consts"
import Auth from './screens/Auth/Auth'
import Main from './screens/Main/Main'
import UsersList from "./components/AdminComponents/Users/usersList"
import ElementPlayList from './components/PlayList/InsidePlayList/trackInPlayList'
import OwnerTrack from './components/MusicCard/OwnerTrack/ownerTrack'
import PersonMusic from './components/FavTracks/personMusic'
import PlayLists from './components/PlayList/MainPlayListScreen/mainPlayLists'
import MainPlayLists from './components/PlayList/MainPlayListScreen/mainPlayLists'
import AdminTracksList from './components/AdminComponents/AdminTracks/admintracks'
export const authRoutes = [
  {
    path:LOGIN_ROUTE,
    Component:Auth
  },
  {
    path:MAIN_ROUTE,
    Component:Main
  },
]

export const publicRoutes = [
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
