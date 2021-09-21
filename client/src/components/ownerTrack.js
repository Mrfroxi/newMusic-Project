import React ,{useState,useEffect} from "react"
import {Button,Row} from 'react-bootstrap'
import FooterMusicPlayer from "./footerMusical";
import FooterSelectMusic from "./footerSelectMusic";
import MusicCardOwner from './musicOwnerCard'
import {authHost} from '../http/index'
import {useDispatch,useSelector} from 'react-redux'
import ModalMusic from "./modals/ownerMusic";
import '../pages/style/ownerTrack.css';
import Container from 'react-bootstrap/Container'
import SendLogo from '../accets/sendLogo'
const OwnerTrack = () => {

  const dispatch = useDispatch()

  const [ownerVisible,setownerVisible] = useState(false)


  const [currMusic, setCurrMusic] = useState(null);

  const ownertracks = useSelector(state=> {
    return state.OwnereMusic.tracks
  })
  
  const { playing } = useSelector(state => state.musicReducer);

    useEffect(() => {
    setCurrMusic(playing)
  }, [playing])
  return(
    <div className="onwTrack">
      <div className ="ownerBlock">
        <h1 className="onwTrackMainText">Your Tracks:</h1>
      <Button className="BtnAddmusic" onClick={() =>setownerVisible(true) }>
        <SendLogo className="Send"/>
        <p className="Btn_Send_Text">Send Your File</p>
        </Button>
      </div>
   <Container>
    <Row className={"d-flex mt-4"}>
     {ownertracks.map((elem) => (
      <MusicCardOwner  key={elem.id} music={elem} closed={elem.closed}/>
      ))}
    </Row>  
    </Container> 
  <ModalMusic show={ownerVisible} handleClose={() => setownerVisible(false)}/>
      {
    currMusic
       ?
     <FooterMusicPlayer music={currMusic}/>
       :
      <FooterSelectMusic/>

    } 
      </div>
  )
}

export default OwnerTrack