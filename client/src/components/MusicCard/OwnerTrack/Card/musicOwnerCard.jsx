import React, {useEffect, useState} from 'react';
import '../../MusicCard.scss'
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import {useDispatch,useSelector} from "react-redux";
import {increaseTimesPlayed, setCurrentPlaying} from "../../../../actions/actionsPlayList";
import Name from "../../../AudioPlay/NameAudio/name";
import {Skeleton} from "@material-ui/lab";
import Box from "@material-ui/core/Box";
import FavouriteButton from '../../../FavouriteButton/addFavouriteButton'
import Key from '../../../../accets/key'
import Globe from '../../../../accets/globe'

import {changeCloseTrack} from '../../../../http/trackAPI'

function MusicCardOwner({music}) {
    const {name,img,id} = music;
    const {publicTracks} = useSelector(state=> state.musicReducer)
    const[isPublic,setisPublic] = useState(false)

    const dispatch =  useDispatch()
    useEffect(() =>{
      const isPublicTrack = publicTracks.some((elem) => elem.id === music.id);
      setisPublic(isPublicTrack);
    },[publicTracks])
  
    const Setclosed = (e)=>{
        e.stopPropagation()
      setisPublic(false)
      changeCloseTrack(false,music.id).then(() => dispatch({type:"ADD_NEW_PUBLICTRACK",publicMusic:music }))
    }
    const SetclosedTrue = (e)=>{
        e.stopPropagation()
      setisPublic(true)
      changeCloseTrack(true,music.id).then(() => dispatch({type:"DELETE_TYPE_CL",musicId:music.id }))
    }


    function handlePlay() {
        dispatch(setCurrentPlaying(music))
        dispatch(increaseTimesPlayed(music.id));
    }

    const [loaded,setLoaded] = useState(false);

    useEffect(()=>{
        setLoaded(true)
    },[]);

    return (
        <div className={"music-card"}>
            {
                !loaded ?
                <div className={"Skeleton-top"}>
                    <Skeleton variant="rect" width={210} height={210} />
                    <Box pt={0.5}>
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Box>
                </div>
                    :
                    <>
                        <div onClick={handlePlay}  className={"music-card-cover"} 
                        >
                            <img src={img} alt={name} className="OwnerTrackLogo"/>
                            <div className="play-circle">
                              {
                                  isPublic ?
                                  <div className="LockBlock DontLock" onClick={SetclosedTrue}>   
                                    <Key  className="Key"/>
                                    </div>:
                                    <div className="LockBlock" onClick={Setclosed}>   
                                    <Globe className="Globe" />
                                    </div>
                                }
                                <PlayCircleFilledWhiteIcon/>
                                <FavouriteButton id={id} name={name} img={img}/>
                            </div>
                        </div>
                        <React.Fragment>
                          <Name name={name} className={"song-name"} length={name.length}/>
                        </React.Fragment>
                    </>
            }


        </div>
    );
}

export default React.memo(MusicCardOwner);