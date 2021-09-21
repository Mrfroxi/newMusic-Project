import React, {useEffect, useState} from 'react';
import '../pages/style/MusicCard.scss'
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import {useDispatch} from "react-redux";
import {increaseTimesPlayed, setCurrentPlaying} from "../actions/actions";
import Name from "./name";
import {Skeleton} from "@material-ui/lab";
import Box from "@material-ui/core/Box";
import FavouriteButton from './addFavouriteButton'
import BtnToPlayList from './btnToPlayList'
function MusicCard(props) {
    const {name,img,id} = props.music;

    // const [isHovered, setHovered] = useState(false);

    // function handleResponse() {
    //     setHovered(!isHovered);
    // }

    const dispatch = useDispatch();

    function handlePlay() {
        dispatch(setCurrentPlaying(props.music))
        dispatch(increaseTimesPlayed(props.music.id));
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
                        // onMouseOver={handleResponse}
                        >
                            <img src={img} alt={name}/>
                            <div className="play-circle">
                                <BtnToPlayList id={id} name={name} img={img} />
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

export default MusicCard;


