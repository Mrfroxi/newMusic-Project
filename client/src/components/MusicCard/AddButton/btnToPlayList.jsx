import React from 'react'
import './btnToPlayList.css'
import { useSelector } from 'react-redux'
import { AddlayTrackLists } from '../../../http/playListAPI'

function BtnToPlayList(props) {
    const { id, name, img } = props
    const { playList } = useSelector((state) => {
        return state.playListReducer
    })
    const setToPlayList = React.useCallback(
        (IdPlayList, namePlayList, e) => {
            e.stopPropagation()
            AddlayTrackLists(IdPlayList, name, img, id, namePlayList).then(() =>
                console.log('good')
            )
        },
        [id, name, img]
    )
    return (
        <div className="BtnToPlayList">
            <h5 className="Main_Logo_Btn">+</h5>
            <ul className="List_Btn">
                {playList.map((elem) => {
                    return (
                        <li
                            className="Elem_btn"
                            onClick={(e) =>
                                setToPlayList(elem.id, elem.name, e)
                            }
                        >
                            {elem.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default React.memo(BtnToPlayList)
