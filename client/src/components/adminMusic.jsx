// import axios from "axios";
// import React ,{useState,useEffect} from "react"
// import {Button,Row} from 'react-bootstrap'
// import FooterMusicPlayer from "./footerMusical";
// import FooterSelectMusic from "./footerSelectMusic";
// import MusicCard from './musicListIem'
// import {authHost} from '../http/index'
// import {useDispatch,useSelector} from 'react-redux'
// import { useHistory } from "react-router-dom"
// import ModalMusic from "./modals/ownerMusic";
// import {ListGroup} from 'react-bootstrap'

// const AdminMusic = () =>{
//   const history = useHistory()
//   const dispatch = useDispatch()

//   const [ownerVisible,setownerVisible] = useState(false)

//   const {tracks} = useSelector(state=> state.FavouriteMusic)


//   const [currMusic, setCurrMusic] = useState(null);

//   const ownertracks = useSelector(state=> {
//     return state.OwnereMusic.tracks
//   })
  
//   const { playing } = useSelector(state => state.musicReducer);

//   const[newSong,setnewSong] = React.useState(null)

//   const sendFile = React.useCallback( async () => {
//     try{
//     const data =  new FormData()
//     data.append('song',newSong)
//     await authHost.post('api/track',data,{
//       headers:{
//         'content-type':'mulpipart/form-data'
//       }
//     })
//     .then( (res) =>  {
//       dispatch({type:"ADD_OWNER_TRACK" , track:res.data})
//       dispatch({type:'ADD_NEW_TRACK' ,track:res.data})
//     }
//     )
//     }catch(e){
//       console.log(e)
//     }
//   },[newSong])

//     useEffect(() => {
//     setCurrMusic(playing)
//   }, [playing])

//   return (
   
//     <div className='AdminTracks'> 
//       <Row className={"d-flex mt-4"}>
//       {tracks.map((elem) => (
//         <MusicCard  key={elem.id} music={elem}/>
//       ))}
//     </Row> 
//         {
//       currMusic
//          ?
//        <FooterMusicPlayer music={currMusic}/>
//          :
//         <FooterSelectMusic/>

//       } 
//         </div>
//   )
// }

// export default AdminMusic