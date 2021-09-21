import React from 'react'
import {Modal,Button,ListGroup} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import ModalTrack from '../modalTrack'
import PlayListTrack from '../modalPlayListTrack'

const AllModalMusic = ({show,idPlayList,handleClose}) => {
  const allTrack = useSelector(state=> {
    return state.musicReducer.playlists
  })

  return (
    <Modal 
    show={show} 
    onHide={handleClose}
    size="lg"
    centered
    >
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      {allTrack.map((elem) => {
        return <PlayListTrack key={elem.id}
        music={elem}
        idPlayList={idPlayList}
        />
      })}
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )

}
export default AllModalMusic