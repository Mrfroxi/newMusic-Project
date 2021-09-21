import React,{ useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container'
import {Button, NavLink} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {ListGroup} from 'react-bootstrap'
import {deleteusers} from '../http/adminAPI'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import './style/Admin.css'
import AdminMusic from '../components/adminMusic'
import UsersList from '../components/usersList'
import PlayLists from '../components/mainPlayLists'

function Admin() {
  const history = useHistory()
  return (
      <div className='Admin_div'>
      <ListGroup className='ListGroup'>
        <ListGroup.Item style = {{cursor:'pointer'}} onClick={() =>  history.push("admin/Users")}>Users </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Admin;
