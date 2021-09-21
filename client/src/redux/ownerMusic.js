const defaultState = {
  tracks:[]
}

export const OwnereMusic = (state=defaultState,action ) =>{
  switch(action.type){
    case "GET_ALL_OWNER_TRACK":
    return {
      ...state,
      tracks:[...action.allTrack]
    
    }
    case "ADD_OWNER_TRACK":
    return {
      ...state,
      tracks:[...state.tracks,action.track]
    }
    case "DELETE_OWNER_TRACK":
    return {
      ...state,
      tracks: state.tracks.filter((value) => +value.trackId !== action.track.id)
    }
    default:
      return state
  }
}