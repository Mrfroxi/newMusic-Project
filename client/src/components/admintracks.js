import React from 'react'
import {Button} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {ListGroup} from 'react-bootstrap'
import {deleteTrack} from '../http/trackAPI'
import '../pages/style/user.css'


function AdminTracksList() {

  const dispatch = useDispatch()
  const tracks = useSelector(state=> {
    return state.musicReducer.playlists
  })
  const DeleteTrack = (id) => {
    deleteTrack(id).then(()=>dispatch({type:'DELETE_TRACK',id}))
  }

  return (
      <div className='User_div'>
        <ListGroup className='User_block_List'>
          {tracks.map((elem) => (
            <ListGroup.Item key={elem.id} > 
            <p>id : {elem.id}</p>
            <p>name : {elem.name} </p>
            <p>userId: {elem.userId} </p>
                  <Button variant = {"danger"} id={elem.id} onClick={(e) => DeleteTrack(e.target.id)} style={{margin:6}  }>Delite</Button>
            </ListGroup.Item>
          ))}
        </ListGroup> 
      
    </div>
  );
}

export default AdminTracksList;