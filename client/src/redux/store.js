import {createStore,combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {musicReducer} from './musicReducer'
import {UserReducer} from './userReducer'
import { playListReducer } from './playListReducer'
import { AdminReducer } from './adminReducer'
import { FavouriteMusic } from './favouriteReducer'
import { OwnereMusic } from './ownerMusic'
import filtersReducer from './filters';

const rootReducer = combineReducers({
  musicReducer,
  UserReducer,
  playListReducer,
  AdminReducer,
  FavouriteMusic,
  OwnereMusic,
  filtersReducer

})
export const  store = createStore(rootReducer, composeWithDevTools())
