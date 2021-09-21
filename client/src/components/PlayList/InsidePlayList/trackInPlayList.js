import React,{ useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container'
import {useSelector,useDispatch} from 'react-redux'
import { takeplayTrackLists } from '../../../http/playListAPI'
import './MusicInPlayList.css'
import FooterMusicPlayer from "../../AudioPlay/FooterAudio/footerMusical";
import FooterSelectMusic from "../../AudioPlay/PlaceMusic/footerSelectMusic";
import CardPlayListTrack from './ColumnCard/cardPlayListTrack'

function ElementPlayList(props) {
  const id = props.match.params.id
  const dispatch = useDispatch()
  useEffect (() => {
    takeplayTrackLists(id).then(data => dispatch({type:'GET_ALL_PlayList_Track' , allPlayList:[...data]}))
  },[])

  const [currMusic, setCurrMusic] = useState(null);

  const {playing} = useSelector(state => state.musicReducer);
  const {selectPlayList} = useSelector(state => state.playListReducer);
  useEffect(() => {
    setCurrMusic(playing)
}, [playing])

  const SelectTrack = useSelector(state => state.playListReducer.selectPlayList)


  return (
    <>
    <Container>

       {selectPlayList.length>1?
        <h1 className="MainTextPlayList">{selectPlayList[0].namePlayList}:</h1>
        :
        "PlayList"
       }
           {
             SelectTrack.map((elem) => {
               return <CardPlayListTrack elem={elem}/>
             })
           }
    </Container>
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