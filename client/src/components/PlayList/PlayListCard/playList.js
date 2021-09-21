import React from 'react'
import { Card, Col} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {PLAYLIST_ITEM} from '../../../utils/consts'
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import  './playList.css'
import  './playList.scss'
import { takeplayTrackLists ,takeNamePlayList } from '../../../http/playListAPI'
function PlayList(props) {

  const{id,name,img,changeId} = props
  const history = useHistory()
  const dispatch = useDispatch()
  const selectedPlayList = () => {
    dispatch({type:"SET_SELECTED_PLAYLIST_NAME",name:name,id:id})
    history.push(PLAYLIST_ITEM+'/'+id)
  }
  const selectedPlayMusic = (e) => {

    e.stopPropagation()
    takeNamePlayList(id).then(data => {
      dispatch({type:'SET_SELECTED_PLAYLIST_NAME' , id:id , name : data.name})
    })
    takeplayTrackLists(id).then(data => {
      changeId(id)
      dispatch({type:'GET_ALL_PlayList_Track' , allPlayList:[...data]})
    })
  }
  return (

      <Col className="PlayLIstCol" md={3} >

        <Card style={{width:150,cursor:'pointer'}} border={"light"} >
          <div className="PlayLIstBlock" onClick={selectedPlayList}>
            <img className="PlayLIstImg" src={process.env.REACT_APP_API_URL + img} alt="#"  />
            <div className="play-circle">
                <PlayCircleFilledWhiteIcon onClick={selectedPlayMusic}/>
            </div>
            {name}
          </div>
        </Card>

      </Col>

  );
}

export default PlayList;