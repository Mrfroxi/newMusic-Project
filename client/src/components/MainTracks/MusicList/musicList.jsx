import React,{useState,useEffect} from 'react'
import { Row } from 'react-bootstrap';
import {useSelector} from 'react-redux'
import MusicCard from '../../MusicCard/MusicMainCard/musicListItem'
import './musicList.css'
import logo from '../../../accets/magnifier.jpg'
import {takeTrack, takeInputTrack} from '../../../http/trackAPI'
import {useDispatch} from 'react-redux'
function MusicList() {
  const dispatch = useDispatch()

  const {publicTracks} = useSelector(state=> state.musicReducer)

  const [inputValue , setinputValue] = useState('')

  useEffect(() => {
    takeTrack().then(data => {
      dispatch({type:'GET_ALL_PublicTrack' , allTrack:[...data.Publictracks]})
    })
  },[])
  useEffect(() => {
    takeInputTrack(inputValue,false).then(data => dispatch({type:'GET_ALL_PublicTrack' , allTrack:[...data.tracks]}))
  },[inputValue])

  const filteredTrack =  publicTracks.filter( track => {
    return track.name.toLowerCase().includes(inputValue.toLowerCase())
  })
  
  return (
    <div className="musicList">
       <div class="musicListGroup">      
        <input 
          className="musicListImput"
          type="text" 
          placeholder="look for music"
          onChange={(event) => setinputValue(event.target.value)}
          />
          <span class="bar"></span>
          <label></label>
        </div>
    
      <Row className={"d-flex mt-4"}>
        {(filteredTrack.length >= 1)?
        filteredTrack.map((elem) => (
          <MusicCard  key={elem.id} music={elem}/>
        )):
        <div className="musicListImgBlock">
           <img  className="musicListImg" src={logo} alt="#" />
           <p className="musicListTextImg">There is no such element(</p>
        </div>
      }
      </Row>  
    </div>
    );
    
}

export default MusicList;
