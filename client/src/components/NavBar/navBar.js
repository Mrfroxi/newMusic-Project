import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { MAIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts'
import logo from '../../accets/music-logo.png'
import './Nav.css'

const NavBar = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => {
        return state.UserReducer
    })
    const history = useHistory()

    const LogOut = () => {
        history.push(REGISTRATION_ROUTE)
        dispatch({ type: 'logOut' })
        localStorage.removeItem('token')
    }

    return (
        <Navbar className="NavBar" variant="dark">
            <Container>
                <Nav className="NavBar_PartLogo">
                    <img
                        src={logo}
                        onClick={() => history.push(MAIN_ROUTE)}
                        className="Nav-logo"
                        alt="#"
                    />
                    {user.__isAuth ? (
                        <>
                            <div className="Nav_trackListBlock">
                                <h5 className="Nav_trackListText">Tracks</h5>
                                <ul className="Nav_trackList">
                                    <li
                                        className="Nav_trackListItem"
                                        onClick={() =>
                                            history.push(
                                                '/main/FavaouriteTrack'
                                            )
                                        }
                                    >
                                        Favourite Tracks{' '}
                                    </li>
                                    <li
                                        className="Nav_trackListItem"
                                        onClick={() =>
                                            history.push('/main/YourTracks')
                                        }
                                    >
                                        Your Tracks
                                    </li>
                                </ul>
                            </div>
                            <div className="Nav_trackListBlock">
                                <h5 className="Nav_trackListText">PlayList</h5>
                                <ul className="Nav_trackList">
                                    <li
                                        className="Nav_trackListItem"
                                        onClick={() =>
                                            history.push('/main/YourPlayList')
                                        }
                                    >
                                        Your PlayList
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : null}
                </Nav>

                {user.__isAuth ? (
                    <Nav>
                        <div className="Nav_trackListBlock">
                            <Button
                                variant={'outline-light'}
                                style={{ margin: 4 }}
                            >
                                Admin
                            </Button>
                            <ul className="Nav_trackList">
                                <li
                                    className="Nav_trackListItem"
                                    onClick={() => history.push('/admin/Users')}
                                >
                                    {' '}
                                    Users
                                </li>
                                <li
                                    className="Nav_trackListItem"
                                    onClick={() =>
                                        history.push('/admin/AdminTracks')
                                    }
                                >
                                    {' '}
                                    All Tracks
                                </li>
                            </ul>
                        </div>
                        <Button
                            variant={'outline-light '}
                            onClick={LogOut}
                            style={{ margin: 4 }}
                        >
                            Exit
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="ml-auto">
                        <Button
                            variant={'outline-light'}
                            onClick={() => history.push(REGISTRATION_ROUTE)}
                        >
                            registration
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    )
}

export default NavBar
