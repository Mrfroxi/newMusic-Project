const defaultState = [
  
]


export const AdminReducer = (state=defaultState,action ) =>{
  switch(action.type){
    case "GET_ALL_USERS":
      return [...state,...action.allUser]
    case "DELETE_USER": 
      return state.filter((value) => +value.id !== +action.id )
    default:
      return state
  }
}