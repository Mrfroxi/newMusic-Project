import React,{ useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container'
import {Button} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import AllModalMusic from './modals/allMusic'
import { takeplayTrackLists } from '../http/playListAPI'
import '../pages/style/MusicInPlayList.css'
import FooterMusicPlayer from "../components/footerMusical";
import FooterSelectMusic from "../components/footerSelectMusic";
import CardPlayListTrack from '../components/cardPlayListTrack'

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

  const [ownerVisible,setownerVisible] = useState(false)

  return (
    <>
    <Container>
       <Button onClick={() =>setownerVisible(true) }> closeOwnerTrack1</Button>
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
            <AllModalMusic  idPlayList={id} show={ownerVisible} handleClose={() => setownerVisible(false)}  />
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