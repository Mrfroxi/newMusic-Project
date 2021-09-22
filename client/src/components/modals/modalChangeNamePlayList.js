import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {Form} from 'react-bootstrap'
import {changeNamePlayList} from '../../http/playListAPI'

const ModalChangePlayListName = React.memo(({show,handleClose,id}) => {

  const [name,setName] = React.useState("")
  const dispatch = useDispatch()
  const changeName = () => {
    changeNamePlayList(id,name).then(() => {
      handleClose()
      dispatch({type:"SET_SELECTED_PLAYLIST_NAME",id,name})
    })
  }
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
    change playlist name:
    <Form.Control value={name} onChange={e=>setName(e.target.value)} className="mt-3" placeholder="write the name of the playlist"/>
    <Button onClick={changeName}> Change </Button>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )

})
export default ModalChangePlayListName