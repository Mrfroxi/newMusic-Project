import React from 'react'
import {Button, NavLink} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {ListGroup} from 'react-bootstrap'
import {deleteusers} from '../http/adminAPI'
import { useHistory} from 'react-router-dom'
import '../pages/style/user.css'


function UsersList() {
  const dispatch = useDispatch()
  const user = useSelector(state=> {
    return state.AdminReducer
  })
  const DeleteUser = (id) => {
    deleteusers(id).then(()=>dispatch({type:'DELETE_USER',id}))
  }

  return (
      <div className='User_div'>
        <ListGroup className='User_block_List'>
          {user.map((elem) => (
            <ListGroup.Item key={elem.id} > 
            <p>id : {elem.id}</p>
            <p>email : {elem.email} </p>
                  <Button variant = {"danger"} id={elem.id} onClick={(e) => DeleteUser(e.target.id)} style={{margin:6}  }>Delite</Button>
            </ListGroup.Item>
          ))}
        </ListGroup> 
      
    </div>
  );
}

export default UsersList;