import React ,{useState,useEffect} from "react"
import {Row} from 'react-bootstrap'
import FooterMusicPlayer from "../AudioPlay/FooterAudio/footerMusical";
import FooterSelectMusic from "../AudioPlay/PlaceMusic/footerSelectMusic";
import MusicCard from '../MusicCard/MusicMainCard/musicListItem'
import {useSelector} from 'react-redux'
import {takeInputFavTracks} from '../../http/trackAPI'
import {useDispatch} from 'react-redux'
import './favouritetracks.css'
const PersonMusic = () =>{
  const dispatch = useDispatch()
  const {tracks} = useSelector(state=> state.FavouriteMusic)


  const [currMusic, setCurrMusic] = useState(null);

  const [inputValue , setinputValue] = useState('')

  useEffect(() => {
    takeInputFavTracks(inputValue).then(data => dispatch({type:'GET_ALL_FAVOURITE_TRACK' , tracks:[...data.tracks]}))
  },[inputValue])
  const { playing } = useSelector(state => state.musicReducer);

    useEffect(() => {
    setCurrMusic(playing)
  }, [playing])

  return (
   
    <div className='FavouriteTracks'> 
        <div class="musicListGroup">  
        <h3 class="FavouriteTracksName"> Search Favourite Tracks:</h3>    
        <div class="FavInput">
        <input 
          className="musicListImput"
          type="text" 
          placeholder="look for Favourite music"
          onChange={(event) => setinputValue(event.target.value)}
          />
          <span class="bar"></span>
          <label></label>
        </div>
        </div>
      <Row className={"d-flex mt-4"}>
      <h4 class="FavouriteTracksName"> Favourite Tracks:</h4>
      {tracks.map((elem) => {
        console.log(elem)
        if(elem.trackId){
          return <MusicCard  key={elem.trackId} music={elem}/>
        }
        return <MusicCard  key={elem.id} music={elem}/>
      }
      )}
    </Row> 
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

export default PersonMusic