import React, { useState , useEffect} from 'react'
import { Button } from 'react-bootstrap'
import '../pages/style/modalTrack.css'
import {AddlayTrackLists,DeleteTrackLists} from '../http/playListAPI'
import {useDispatch,useSelector} from 'react-redux'


const PlayListTrack = ({music,idPlayList}) => {
  const{id,name,img} = music
  const dispatch =  useDispatch(false)
  const selectTrackPlayList = useSelector(state=> {
    return state.playListReducer.selectPlayList
  })
  const[inPlayList,setinPlayList]=useState(false)

 const fr = 'firtsplayalist'
  const setToPlayList = (e) =>{
    e.preventDefault()
    setinPlayList(true)
    AddlayTrackLists(idPlayList,name,img,id,fr).then(()=>dispatch({type:"SET_SECLECT_TRACK",selectTrack:music}))
  }
  const deleteToPlayList = (e) =>{
    e.preventDefault()
    setinPlayList(false)
    DeleteTrackLists(idPlayList,id).then(()=>dispatch({type:"DELETE_SECLECT_TRACK",trackId:id}))
  }
  useEffect(() =>{
    const TrackinPlayList = selectTrackPlayList.some((elem) => {
      if(elem.trackId){
        return elem.trackId === id
      }
     return elem.id === id
    }
    );
    setinPlayList(TrackinPlayList);
  },[selectTrackPlayList])
  
  return (
    <div className="ModalTrack">
      <img className="ModalTrackImg" src={music.img} alt="#"/>
      <p className="ModalTrackText">{id} -----------{music.name}</p>
      {inPlayList?
                      <Button onClick={deleteToPlayList}> Delete track from PlayList</Button>:
                      <Button onClick={setToPlayList}> add to this PlayList</Button>
      }
    </div>
  )

}
export default PlayListTrack