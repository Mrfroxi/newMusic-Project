const defaultState = {
    __isAuth : false ,
    __user: {
       email: null,
    }
  }

  
  export const UserReducer = (state=defaultState,action ) =>{
    console.log(action)
    switch(action.type){
      case "SetIsAuth":
        return {...state,__isAuth:true }
      case "SetUser":
        return {...state,__user:{
          email:`${action.info.email}`,
        } }
      case "logOut":
      return {...state, 
         __isAuth : false,
         __user: {
          email: null,
       }}
      default:
        return state
    }
  }