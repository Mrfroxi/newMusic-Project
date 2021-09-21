import React,{ useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container'
import {useSelector,useDispatch} from 'react-redux'
import { takeplayTrackLists,takeNamePlayList } from '../../../http/playListAPI'
import './MusicInPlayList.css'
import FooterMusicPlayer from "../../AudioPlay/FooterAudio/footerMusical";
import FooterSelectMusic from "../../AudioPlay/PlaceMusic/footerSelectMusic";
import CardPlayListTrack from './ColumnCard/cardPlayListTrack'
import ModalChangePlayListName from '../../modals/modalChangeNamePlayList'
import Pensil from '../../../accets/pensil.js'
function ElementPlayList(props) {

  const id = props.match.params.id
  const dispatch = useDispatch()
  useEffect (() => {
    takeplayTrackLists(id).then(data => dispatch({type:'GET_ALL_PlayList_Track' , allPlayList:[...data]}))
    takeNamePlayList(id).then(data => dispatch({type:'SET_SELECTED_PLAYLIST_NAME' , id:id , name : data.name}))
  },[])

  const [currMusic, setCurrMusic] = useState(null);
  const [NameownerVisible,setNameownerVisible] = useState(false)
  const {playing} = useSelector(state => state.musicReducer);
  const {selectPlayListName} = useSelector(state => state.playListReducer);
  useEffect(() => {
    setCurrMusic(playing)
}, [playing])
const changeName = (e) => {
  e.stopPropagation()
  setNameownerVisible(true)
}
  const SelectTrack = useSelector(state => state.playListReducer.selectPlayList)

  return (
    <>
    <Container>
      <div className="MainTextPlayList_Block"> 
        <h1 className="MainTextPlayList">{selectPlayListName}</h1>
        <div className="Playlist_Change_name_Pen" onClick={changeName}> 
                <Pensil className="Pen"/>
        </div>
        <h2 className="MainTextPlayListText">:</h2>
        </div>
           {
             SelectTrack.map((elem) => {
               return <CardPlayListTrack elem={elem}/>
             })
           }
    </Container>
    <ModalChangePlayListName id={id} show={NameownerVisible} handleClose={() => setNameownerVisible(false)}/>
     {
      currMusic
         ?
       <FooterMusicPlayer music={currMusic}/>
         :
        <FooterSelectMusic/>

    }
    </>
  );
}

export default ElementPlayList;