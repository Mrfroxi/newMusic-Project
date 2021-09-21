import React, { useEffect,useState } from 'react'
import MusicList from '../../components/MainTracks/MusicList/musicList'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {useSelector} from 'react-redux'
import FooterMusicPlayer from "../../components/AudioPlay/FooterAudio/footerMusical";
import FooterSelectMusic from "../../components/AudioPlay/PlaceMusic/footerSelectMusic";

function Main() {
  const [currMusic, setCurrMusic] = useState(null);

  const {playing} = useSelector(state => state.musicReducer);

  useEffect(() => {
    setCurrMusic(playing)
}, [playing])

  return (
    <div>
    <Container >
      Popular Tracks
    <Row>
      <Col md={12}>
        <audio/>
      <MusicList/>
      </Col>
    </Row>
  </Container>
  <React.Fragment>
  {
      currMusic
         ?
       <FooterMusicPlayer music={currMusic}/>
         :
        <FooterSelectMusic/>

    }
  </React.Fragment>
  </div>

  );
}

export default Main;

