const defaultState = {
  playlists:[],
  publicTracks:[],
  playing:null,
  bannerOpen: false,
}


export const musicReducer = (state=defaultState,action ) =>{
  switch(action.type){
    case "GET_ALL_Track":
      return {
        ...state, 
        playlists:[...action.allTrack] 
      }
      case "GET_ALL_PublicTrack":
        return {
          ...state, 
          publicTracks:[...action.allTrack] 
        }
    case "SET_CURR_PLAYING":
          return {
              ...state,
              playing: action.payload
          }
    case "SET_BANNER_OPEN":
            return {
                ...state,
                bannerOpen: action.payload
            };
    case "ADD_NEW_TRACK":
              return {
                ...state,
                playlists:[...state.playlists,action.track]
              }  
    case "DELETE_TYPE_CL":
      return {
        ...state,
        publicTracks: state.publicTracks.filter((value) => +value.id !== action.musicId)
              }    
    case "ADD_NEW_PUBLICTRACK":
          return {
          ...state,
          publicTracks:[...state.publicTracks,action.publicMusic]
            }
    case "DELETE_TRACK":
          return {
          ...state, 
          playlists: state.playlists.filter((value) => +value.id !== +action.id )
            }                   
        
    default:
      return state
  }
}