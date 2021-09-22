import React,{useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {Modal} from 'react-bootstrap'
import {createPlaylist} from '../../../http/playListAPI'

function ModalCreatePlayList({show,handleClose} ) {

  const dispatch = useDispatch()

  const [name,setName] = useState("")
  const [file,setfile] = useState("")

  const selectFile = (e) => {
    setfile(e.target.files[0])
  }

  const addDevice = () => {
    const formData = new FormData()
    formData.append('name',name)
    formData.append('img',file)
    createPlaylist(formData).then(data => {
      handleClose()
      dispatch({type:"ADD_NEW_PLAYLIST",newPlaylist:data})
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
    </Modal.Header>

    <Modal.Body>
      <p>PlayList name:</p>
      <Form.Control value={name} onChange={e=>setName(e.target.value)} className="mt-3" placeholder="write the name of the playlist"/>
      <p>PlayList photo:</p>
      <Form.Control className="mt-3" type="file"  onChange={selectFile}/>
      <Button onClick={addDevice}  >Add</Button>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  );
}
export default React.memo(ModalCreatePlayList);