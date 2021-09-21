import React,{useEffect,useState} from 'react';
import {increaseTimesPlayed, setCurrentPlaying} from "../../../../actions/actionsPlayList";
import '../MusicInPlayList.css'
import { Button } from 'react-bootstrap'
import {DeleteTrackLists} from '../../../../http/playListAPI'
import {useDispatch} from "react-redux";
function CardPlayListTrack({elem}) {
  
  const {trackId , playListId} = elem
  const dispatch = useDispatch();
  function handlePlay() {
    dispatch(setCurrentPlaying(elem))
    dispatch(increaseTimesPlayed(elem.id));
}
const[inPlayList,setinPlayList]=useState(false)
const deleteToPlayList = (e) =>{
  e.preventDefault()
  e.stopPropagation();
  setinPlayList(false)
  DeleteTrackLists(playListId,trackId).then(()=>dispatch({type:"DELETE_SECLECT_TRACK",trackId:trackId}))
}
const [loaded,setLoaded] = useState(false);

useEffect(()=>{
    setLoaded(true)
},[]);

    return (
      <div onClick={handlePlay} key={elem.id} className="PlayList_Track">
      <img className="PlayListTrackImg" src={elem.img} alt="#"/>
      {
        elem.nameTrack?
        <p className="PlayListTrackText">{elem.nameTrack}</p>:
        <p className="PlayListTrackText">{elem.name}</p>
      }
         <Button onClick={deleteToPlayList}> Delete track from PlayList</Button>:
  </div>
    );
}

export default CardPlayListTrack;