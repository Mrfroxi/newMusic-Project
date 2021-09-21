// import React, { useState , useEffect} from 'react'
// import { Button } from 'react-bootstrap'
// import '../pages/style/modalTrack.css'
// import {takeTrack} from '../http/trackAPI'
// import {useDispatch,useSelector} from 'react-redux'
// import {changeCloseTrack} from '../http/trackAPI'

// const ModalTrack = ({music}) => {
//   const {publicTracks} = useSelector(state=> state.musicReducer)

//   const[isPublic,setisPublic] = useState(false)
 
//   const dispatch =  useDispatch()
//   useEffect(() =>{
//     const isPublicTrack = publicTracks.some((elem) => elem.id === music.id);
//     setisPublic(isPublicTrack);
//   },[publicTracks])

//   const Setclosed = ()=>{
//     setisPublic(false)
//     changeCloseTrack(false,music.id).then(() => dispatch({type:"ADD_NEW_PUBLICTRACK",publicMusic:music }))
//   }
//   const SetclosedTrue = ()=>{
//     setisPublic(true)
//     changeCloseTrack(true,music.id).then(() => dispatch({type:"DELETE_TYPE_CL",musicId:music.id }))
//   }


//   return (
//     <div className="ModalTrack">
//       <img className="ModalTrackImg" src={music.img} alt="#"/>
//       <p className="ModalTrackText">{music.name}</p>
//             {
//               isPublic?
//               <Button onClick={SetclosedTrue}> +</Button>
//               :
//               <Button onClick={Setclosed} style={{color:'#0088ff'}}> 
//                 /
//               </Button>
//             }
//     </div>
//   )

// }
// export default ModalTrack