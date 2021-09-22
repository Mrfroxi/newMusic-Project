import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {authHost} from '../../http/index'
import '../../pages/style/MusicCard.scss'

const ModalMusic = React.memo(({show,handleClose} ) => {
  const[newSong,setnewSong] = React.useState(null)
  const[closed,setclosed] = React.useState(true)

  const dispatch = useDispatch()
  const sendFile = React.useCallback( async () => {
    try{
    const data =  new FormData()
    data.append('song',newSong)
    data.append('closed',closed)
    await authHost.post('api/track',data,{
      headers:{
        'content-type':'mulpipart/form-data'
      },
    })
    .then( (res) =>  {
      dispatch({type:"ADD_OWNER_TRACK" , track:res.data})
      dispatch({type:'ADD_NEW_TRACK' ,track:res.data})
      handleClose()
    }
    )
    }catch(e){
      console.log(e)
    }
  },[newSong])

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
      <div className="modal-block"> 
        <div className="block-dispatch">   
      <p  className="checkBoxText2"> choose File:</p>
                <input type="file" id="file" className="input_File" onChange={(e) =>setnewSong(e.target.files[0])} />   
      </div>
      <div className="checkbox">
        <input type="checkbox" className="#"
        checked={closed} onChange={() => setclosed(!closed)}
        />
        <p className="checkBoxText">closed</p>
      </div>  
      <Button  variant = {"danger"} className = "btn" onClick={sendFile}>Отправить файл</Button>    
    </div>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )

})
export default ModalMusic